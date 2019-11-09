import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo/models/todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      { id: 11, text: 'test1', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 12, text: 'test2', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 13, text: 'test3', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 14, text: 'test4', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 15, text: 'test5', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 16, text: 'test6', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
    ];
    return { todos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
