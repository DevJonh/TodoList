import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/todo-list' },
  { path: 'todo-create', component: TodoCreateComponent },
  { path: 'todo-edit/:id', component: TodoEditComponent },
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
