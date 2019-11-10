import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';

import * as TodoActions from './todo.actions';

export const todoFeatureKey = 'todo';

export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

export const initialState: State = {
  loading: false,
  todos: [],
};

const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadAll, state => ({ ...state, loading: true })),
  on(TodoActions.loadAllSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    todos: [...state.todos, ...todos],
  })),
  on(TodoActions.loadAllFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TodoActions.load, (state, { id }) => ({ ...state, loading: true, selectedId: id })),
  on(TodoActions.loadSuccess, (state, { todo }) => {
    const todos = state.todos.some(t => t.id === todo.id)
      ? state.todos.map(t => (t.id === todo.id ? todo : t))
      : [...state.todos, todo];
    return { ...state, loading: false, todos };
  }),
  on(TodoActions.loadFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TodoActions.create, state => ({ ...state, loading: true })),
  on(TodoActions.createSuccess, (state, { todo }) => {
    const todos = [...state.todos, todo];
    return { ...state, loading: false, todos };
  }),
  on(TodoActions.createFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TodoActions.update, state => ({ ...state, loading: true })),
  on(TodoActions.updateSuccess, state => ({ ...state, loading: false })),
  on(TodoActions.updateFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TodoActions.remove, state => ({ ...state, loading: true })),
  on(TodoActions.removeSuccess, (state, { id }) => {
    const todos = state.todos.filter(todo => todo.id !== id);
    return { ...state, loading: false, todos };
  }),
  on(TodoActions.removeFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
