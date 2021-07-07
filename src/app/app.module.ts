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
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from  '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     FooterComponent,
     TodoCreateComponent, 
     TodoEditComponent, 
     TodoListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,    
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
