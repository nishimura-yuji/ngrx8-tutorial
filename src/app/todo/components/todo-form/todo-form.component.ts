import { Component, Output, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Input() loading: boolean;
  @Output() create = new EventEmitter<Partial<Todo>>();

  form = this.fb.group({
    text: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const text: string = this.form.get('text').value;
    const todo: Partial<Todo> = {
      text,
    };
    this.create.emit(todo);
    this.form.reset();
  }
}
