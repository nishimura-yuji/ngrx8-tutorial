import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, act } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, tap, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '../services/todo.service';
import * as TodoActions from './todo.actions';
@Injectable()
export class TodoEffects {



  constructor(private actions$: Actions) {}

}
