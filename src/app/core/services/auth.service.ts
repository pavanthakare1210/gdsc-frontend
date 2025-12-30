import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export type Role = 'admin' | 'center' | 'teacher' | 'students';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth';

  // Track role globally
  private roleSubject = new BehaviorSubject<Role>(this.getStoredRole());
  role$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 🔹 login with auto-save
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((res: any) => this.saveLoginData(res))  // auto-store login details
    );
  }

  // 🔹 Save token + user role + username
  saveLoginData(res: any) {
    const token = res?.data?.token;
    const roles = res?.data?.roles || [];
    const username = res?.data?.username || '';

    if (!token) return; // safety check

    localStorage.setItem('token', token);
    localStorage.setItem('roles', JSON.stringify(roles));
    localStorage.setItem('username', username);

    // store role if only one
    if (roles.length === 1) this.setRole(roles[0] as Role);
  }

  // 🔹 set and broadcast role
  setRole(role: Role) {
    this.roleSubject.next(role);
    localStorage.setItem('activeRole', role);
  }

  // 🔹 Read role from storage when user reloads
  private getStoredRole(): Role {
    return (localStorage.getItem('activeRole') as Role) || 'admin';
  }

  // 🔹 Authentication Checks
  logout() {
    localStorage.clear();
    this.roleSubject.next('admin');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRoles(): string[] {
    return JSON.parse(localStorage.getItem('roles') || '[]');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // ---------------- AUTH API CALLS ---------------- //
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forget-password`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password/${token}`, { password });
  }

  changePassword(data: { username: string; oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/change-password`, data);
  }

  register(data: { username: string; email: string; password: string; firstName: string; lastName: string; phone: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
