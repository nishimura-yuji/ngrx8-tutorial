import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, act } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, concatMap, switchMap, catchError, tap } from 'rxjs/operators';

import { TodoService } from '../services/todo.service';
import * as TodoActions from './todo.actions';
@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAll),
      switchMap(() =>
        this.todoService.loadAll().pipe(
          map(result => TodoActions.loadAllSuccess({ todos: result })),
          catchError(error => of(TodoActions.loadAllFailure({ error })))
        )
      )
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.load),
      concatMap(({ id }) =>
        this.todoService.load(id).pipe(
          map(result => TodoActions.loadSuccess({ todo: result })),
          catchError(error => of(TodoActions.loadFailure({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.create),
      concatMap(({ todo }) =>
        this.todoService.create(todo).pipe(
          map(result => TodoActions.createSuccess({ todo: result })),
          catchError(error => of(TodoActions.createFailure({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.update),
      concatMap(({ todo }) =>
        this.todoService.update(todo).pipe(
          map(_ => TodoActions.updateSuccess()),
          catchError(error => of(TodoActions.updateFailure({ error })))
        )
      )
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.remove),
      concatMap(({ id }) =>
        this.todoService.remove(id).pipe(
          map(() => TodoActions.removeSuccess({ id })),
          catchError(error => of(TodoActions.removeFailure({ error })))
        )
      )
    )
  );
}
