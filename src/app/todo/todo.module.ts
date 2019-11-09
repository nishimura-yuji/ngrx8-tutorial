import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoStoreModule } from './store/todo-store.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoListItemComponent, TodoFormComponent],
  imports: [CommonModule, TodoRoutingModule, TodoStoreModule, ReactiveFormsModule],
  exports: [TodoComponent],
})
export class TodoModule {}
