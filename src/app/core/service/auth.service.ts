import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:8080/api/auth/register';

  constructor(private http:HttpClient) { }
  forgotPassword(email:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/forget-password`,
      {email});
  }
   resetPassword(token:string,password:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/reset-password/{$token}`,{password});
   }
   changePassword(payload: { username: string; oldPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/change-password`, payload);
  }

 register(payload: { username: string; email: string; password: string; firstName:string; lastName:string; phone:"11" }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }
}
