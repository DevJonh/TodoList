import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
<<<<<<< HEAD
import { MatSelectModule } from  '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input';



=======
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
>>>>>>> 3cf375676dd67b00b2eb4f2891f7116f2bd9bc45

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
<<<<<<< HEAD
    MatOptionModule,    
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule


=======
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
>>>>>>> 3cf375676dd67b00b2eb4f2891f7116f2bd9bc45
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
