import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { reducer } from './todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStoreModule { }
