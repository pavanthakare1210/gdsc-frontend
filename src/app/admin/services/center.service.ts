import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Center } from '../models/center.model';

@Injectable({ providedIn: 'root' })
export class CenterService {
  private baseUrl = 'http://localhost:8080/api/centers';

  constructor(private http: HttpClient) {}

  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>(this.baseUrl);
  }

  createCenter(center: Center): Observable<any> {
    return this.http.post(this.baseUrl, center);
  }

  updateCenter(id: number, center: Center): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, center);
  }

  deleteCenter(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  toggleStatus(id: number, p0: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/toggle`, {});
  }
}
