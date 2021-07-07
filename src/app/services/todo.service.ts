import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.baseUrl}/tasks`, this.httpOptions)
      .pipe(retry(1));
  }

  getTasksById(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.baseUrl}/tasks/${id}`, this.httpOptions)
      .pipe(retry(1));
  }

  createTask(task: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.baseUrl}/tasks`, task, this.httpOptions)
      .pipe(retry(1));
  }

  updateTask(id: number, task: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.baseUrl}/tasks/${id}`, task, this.httpOptions)
      .pipe(retry(1));
  }

  deleteTask(id: number) {
    return this.http.delete<Todo>(`${this.baseUrl}/tasks/${id}`).pipe(retry(1));
  }
}
