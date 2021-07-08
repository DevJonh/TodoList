import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent implements OnInit {
  formData!: FormGroup;
  todo: Todo = <Todo>{};
  task = new FormControl(this.todo.task, [Validators.required]);
  status = new FormControl(this.todo.status, [Validators.required]);

  id = this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private message: ShowMessageService
  ) {
    this.formData = new FormGroup({
      task: this.task,
      status: this.status,
    });
  }

  ngOnInit(): void {}

  create(data: any): void {
    let newTodo = {
      ...data,
      dateOfCreation: new Date(),
      dateOfConclusion: data.status === 'Concluído' ? new Date() : '',
    };

    this.todoService.createTask(newTodo).subscribe(() => {
      this.message.showMessage('Tarefa Cadastrada com sucesso!');
      this.router.navigate(['/todo-list']);
    });
  }

  back(): void {
    this.router.navigate(['/todo-list']);
  }
}
