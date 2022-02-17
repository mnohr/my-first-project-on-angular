import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

import { RandomComponent } from './MyComponents/random/random.component';
import {  FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
