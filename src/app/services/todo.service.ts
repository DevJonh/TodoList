import { Todo } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ShowMessageService } from './show-message.service';

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

  public loading = false;

  constructor(private http: HttpClient, private message: ShowMessageService) {}

  getAllTasks(): Observable<Todo> {
    this.loading = true;
    return this.http.get<Todo>(`${this.baseUrl}/tasks`, this.httpOptions).pipe(
      retry(1),
      catchError((e) => this.handleError(e, ''))
    );
  }

  getTasksById(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.baseUrl}/tasks/${id}`, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e, ''))
      );
  }

  createTask(task: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.baseUrl}/tasks`, task, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e, 'criation'))
      );
  }

  updateTask(id: number, task: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(`${this.baseUrl}/tasks/${id}`, task, this.httpOptions)
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e, 'update'))
      );
  }

  updateTaskElement(id: number, task: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(
        `${this.baseUrl}/tasks/${id}`,
        {
          ...task,
          status: 'Concluído',
          dateOfConclusion: new Date(),
        },
        this.httpOptions
      )
      .pipe(
        retry(1),
        catchError((e) => this.handleError(e, 'update'))
      );
  }

  deleteTask(id: number) {
    return this.http.delete<Todo>(`${this.baseUrl}/tasks/${id}`).pipe(
      retry(1),
      catchError((e) => this.handleError(e, 'delete'))
    );
  }

  handleError(e: any, type: string) {
    console.log(e);

    if (e.statusText === 'Unknown Error')
      this.message.showMessage('Ocorreu um erro inesperado!', true);

    if (type === 'criation')
      this.message.showMessage(
        'Falha ao criar a tarefa! Tente mais tarde.',
        true
      );
    if (type === 'delete')
      this.message.showMessage(
        'Falha na exclusão a tarefa! Tente mais tarde.',
        true
      );
    if (type === 'update')
      this.message.showMessage(
        'Falha ao atualizar a tarefa! Tente mais tarde.',
        true
      );

    return throwError(e.message);
  }
}
