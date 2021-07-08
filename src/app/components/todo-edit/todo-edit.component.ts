import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  formData!: FormGroup;
  todo: Todo = <Todo>{};
  task = new FormControl(this.todo.task, [Validators.required]);
  status = new FormControl(this.todo.status, [Validators.required]);

  id = this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.formData = new FormGroup({
      task: this.task,
      status: this.status,
    });
  }

  ngOnInit(): void {
    this.todoService.getTasksById(this.id).subscribe((data) => {
      this.formData.patchValue(data);
      this.todo = data;
    });
  }

  update(data: any): void {
    let newTodo = {
      ...data,
      id: this.todo.id,
      dateOfCreation: this.todo.dateOfCreation,
      dateOfConclusion: data.status === 'Concluído' ? new Date() : '',
    };

    this.todoService.updateTask(this.id, newTodo).subscribe(() => {
      this.todoService.showMessage('Tarefa Atualizada com sucesso!');
      this.router.navigate(['/todo-list']);
    });
  }

  back(): void {
    this.router.navigate(['/todo-list']);
  }
}
