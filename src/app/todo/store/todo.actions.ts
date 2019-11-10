import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const loadAll = createAction('[Todo Page] Load All');

export const loadAllSuccess = createAction('[Todo API] Load All Success', props<{ todos: Todo[] }>());

export const loadAllFailure = createAction('[Todo API] Load All Failure', props<{ error: any }>());

export const load = createAction('[Todo Page] Load', props<{ id: number }>());

export const loadSuccess = createAction('[Todo API] Load Success', props<{ todo: Todo }>());

export const loadFailure = createAction('[Todo API] Load Failure', props<{ error: any }>());

export const create = createAction('[Todo Page] Create', props<{ todo: Partial<Todo> }>());

export const createSuccess = createAction('[Todo API] Create Success', props<{ todo: Todo }>());

export const createFailure = createAction('[Todo API] Create Failure', props<{ error: any }>());

export const update = createAction('[Todo Page] Update', props<{ todo: Todo }>());

export const updateSuccess = createAction('[Todo API] Update Success');

export const updateFailure = createAction('[Todo API] Update Failure', props<{ error: any }>());

export const remove = createAction('[Todo Page] Remove', props<{ id: number }>());

export const removeSuccess = createAction('[Todo API] Remove Success', props<{ id: number }>());

export const removeFailure = createAction('[Todo API] Remove Failure', props<{ error: any }>());
