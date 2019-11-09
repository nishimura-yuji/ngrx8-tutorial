import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoFacade } from '../../store/todo.facade';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  loading$ = this.todoService.loading$;
  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoFacade) {}
  ngOnInit() {
    this.todoService.loadAll();
  }
  create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false;
    todo.createdAt = Math.floor(date.getTime() / 1000);
    todo.updatedAt = Math.floor(date.getTime() / 1000);
    this.todoService.create(todo);
  }
  update(todo: Todo) {
    this.todoService.update(todo);
  }
  remove(id: number) {
    this.todoService.remove(id);
  }
}
