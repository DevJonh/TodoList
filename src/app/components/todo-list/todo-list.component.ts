import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from 'models/todo.model';
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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTasks().subscribe((data) => {
      this.todoData = data;
      this.dataSource.data = this.todoData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteTask(id: number) {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      this.todoService.deleteTask(id).subscribe((data) => {
        this.todoService.showMessage('Tarefa excluída com sucesso!');
        this.todoService.getAllTasks().subscribe((data) => {
          this.todoData = data;
          this.dataSource.data = this.todoData;
        });
      });
    }
  }

  doneTask(id: number, element: Todo) {
    this.todoService.updateTaskElement(id, element).subscribe(() => {
      this.todoService.showMessage('Parabéns por sua tarefa concluída!');
      this.todoService.getAllTasks().subscribe((data) => {
        this.todoData = data;
        this.dataSource.data = this.todoData;
      });
    });
  }
}
