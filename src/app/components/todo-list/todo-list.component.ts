import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';

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

  dataSource: Todo[] = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}

const ELEMENT_DATA: Todo[] = [
  {
    id: 1,
    dateOfCriation: new Date().toLocaleString(),
    task: 'Lavar Louça',
    dateOfconclusion: '',
    status: 'Em andamento',
  },
];
