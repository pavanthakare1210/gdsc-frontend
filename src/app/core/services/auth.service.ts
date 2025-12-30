import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export type Role = 'admin' | 'center' | 'teacher' | 'students';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  // Role state management
  private roleSubject = new BehaviorSubject<Role>('admin');
  roleObservable = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Set role
  setRole(role: Role) {
    this.roleSubject.next(role);
  }

  // LOGIN
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  // Save login data after successful login
  saveLoginData(res: any) {
    const token = res?.data?.token;
    const roles = res?.data?.roles || [];
    const username = res?.data?.username || '';

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('roles', JSON.stringify(roles));
      localStorage.setItem('username', username);
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // OTHER AUTH APIs
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forget-password`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password/${token}`, { password });
  }

  changePassword(payload: { username: string; oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/change-password`, payload);
  }

  register(payload: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }
}
