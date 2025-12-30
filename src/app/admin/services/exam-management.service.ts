import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class examManagementService {

  private baseUrl = 'http://localhost:8080/exams';

  constructor(private http: HttpClient) {}

  // 📘 Exams
  getAllExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getExamById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createExam(exam: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, exam);
  }

  updateExam(id: number, exam: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, exam);
  }

  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // ❓ Questions
  getExamQuestions(examId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${examId}/questions`);
  }

  addQuestion(examId: number, question: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${examId}/questions`, question);
  }

  updateQuestion(questionId: number, question: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/questions/${questionId}`, question);
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/questions/${questionId}`);
  }

  // 🧑‍🎓 Student
  getStudentExams(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/student/${studentId}`);
  }

  submitExam(examId: number, answers: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${examId}/submit`, answers);
  }

  getStudentResults(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/results/student/${studentId}`);
  }

  // 📊 Results & Evaluation
  evaluateExam(examId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${examId}/evaluate`, {});
  }

  getExamResults(examId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${examId}/results`);
  }

  // 🏫 Course & Center
  getCourseExams(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/course/${courseId}`);
  }

  getCenterExams(centerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/center/${centerId}`);
  }
}
