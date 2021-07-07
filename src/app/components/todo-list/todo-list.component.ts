import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'criation',
    'task',
    'status',
    'finished',
    'action',
  ];

  dataSource: any = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTasks().subscribe((data) => {
      this.dataSource = data;
    });
  }
}

const ELEMENT_DATA: Todo[] = [
  {
    id: 1,
    dateOfCriation: new Date().toLocaleString(),
    task: 'Lavar Louça',
    dateOfconclusion: '',
    status: 'Em andamento',
  },
  {
    id: 1,
    dateOfCriation: new Date().toLocaleString(),
    task: 'Lavar Louça',
    dateOfconclusion: '',
    status: 'Em andamento',
  },
  {
    id: 1,
    dateOfCriation: new Date().toLocaleString(),
    task: 'Lavar Louça',
    dateOfconclusion: '',
    status: 'Em andamento',
  },
];
