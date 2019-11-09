import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { State } from './todo.reducer';
import * as TodoSelectors from './todo.selector';
import * as TodoActions from './todo.actions';
import { TodoStoreModule } from './todo-store.module';

@Injectable({
  providedIn: TodoStoreModule, // 'root' でもOK
})
export class TodoFacade {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));

  constructor(private store: Store<State>) {}

  loadAll() {
    this.store.dispatch(TodoActions.loadAll());
  }

  load(id: number) {
    this.store.dispatch(TodoActions.load({ id }));
  }

  create(todo: Partial<Todo>) {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  update(todo: Todo) {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  remove(id: number) {
    this.store.dispatch(TodoActions.remove({ id }));
  }
}
