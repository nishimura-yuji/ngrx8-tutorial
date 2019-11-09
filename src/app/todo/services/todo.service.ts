import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todo.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  private todosUrl = 'api/todos'; // Web APIのURL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  loadAll() {
    return this.http
      .get<Todo[]>(this.todosUrl, this.httpOptions)
      .pipe(tap(todos => console.log('load all todo', todos)));
  }

  load(id: string) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions);
  }

  create(todo: Partial<Todo>) {
    const url = `${this.todosUrl}`;
    return this.http.post<Todo>(url, todo, this.httpOptions);
  }

  update(todo: Todo) {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, this.httpOptions);
  }

  remove(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http
      .delete<Todo>(url, this.httpOptions)
      .pipe(tap(_ => console.log(`deleted hero id=${id}`)));
  }
}
