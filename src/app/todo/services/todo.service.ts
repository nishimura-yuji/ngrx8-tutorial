import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todo.model';
import { tap } from 'rxjs/operators';

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

  load(id: number) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions);
  }

  create(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  update(todo: Todo) {
    return this.http.put(this.todosUrl, todo, this.httpOptions);
  }

  remove(id: number) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(tap(_ => console.log(`deleted todo id=${id}`)));
  }
}
