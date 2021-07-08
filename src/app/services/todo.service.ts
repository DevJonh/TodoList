import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  getAllTasks(): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/tasks`, this.httpOptions).pipe(
      retry(1),
      catchError((e) => this.handleError(e))
    );
  }

  getTasksById(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.baseUrl}/tasks/${id}`, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e))
      );
  }

  createTask(task: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.baseUrl}/tasks`, task, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e))
      );
  }

  updateTask(id: number, task: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.baseUrl}/tasks/${id}`, task, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e))
      );
  }
  updateTaskElement(id: number, task: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(
        `${this.baseUrl}/tasks/${id}`,
        { ...task, status: 'Concluído', dateOfConclusion: new Date() },
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e))
      );
  }

  deleteTask(id: number) {
    return this.http.delete<Todo>(`${this.baseUrl}/tasks/${id}`).pipe(
      retry(1),
      catchError((e) => this.handleError(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['snack-error'] : ['snack-success'],
    });
  }

  handleError(e: any) {
    console.log(e);

    if (e.statusText === 'Unknown Error') {
      this.showMessage('Ocorreu um erro inesperado!', true);
    }
    return throwError(e.message);
  }
}
