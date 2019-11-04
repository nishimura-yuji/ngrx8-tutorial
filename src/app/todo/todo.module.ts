import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoStoreModule } from './store/todo-store.module';


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    TodoStoreModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
