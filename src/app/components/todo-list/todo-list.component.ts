import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from 'src/app/models/todo.model';
import { ShowMessageService } from 'src/app/services/show-message.service';
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

  todoData: any;
  dataSource = new MatTableDataSource();

  data: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private todoService: TodoService,
    private messageService: ShowMessageService
  ) {}

  ngOnInit(): void {
    this.todoService.getAllTasks().subscribe((data) => {
      this.todoService.loading = false;
      this.todoData = data;
      this.dataSource.data = this.todoData;
    });
  }

  ngOnChanges() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteTask(id: number) {
    if (window.confirm('Deseja realmente excluir esta tarefa?')) {
      this.todoService.deleteTask(id).subscribe(() => {
        this.todoService.getAllTasks().subscribe((data) => {
          this.todoData = data;
          this.dataSource.data = this.todoData;
        });
      });
    }
  }

  doneTask(id: number, element: Todo) {
    this.todoService.updateTaskElement(id, element).subscribe(() => {
      this.messageService.showMessage('Parabéns por sua tarefa concluída!');
      this.todoService.getAllTasks().subscribe((data) => {
        this.todoData = data;
        this.dataSource.data = this.todoData;
      });
    });
  }
}
