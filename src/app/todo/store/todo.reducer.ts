import { Action, createReducer, on } from '@ngrx/store';


export const todoFeatureKey = 'todo';

export interface State {

}

export const initialState: State = {

};

const todoReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
