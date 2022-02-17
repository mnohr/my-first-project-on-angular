import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  localItem: string;
  todos:Todo[];

  constructor() {
    // this.todos = [
    //   {
    //     sno: 1,
    //     title:"this is first todo",
    //     desc: "description",
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     title:"this is second todo titile",
    //     desc:"this is second desc",
    //     active: false
    //   }

    // ]
    this.localItem = localStorage.getItem("todoStore");
    if(this.localItem == null){
      this.todos =[];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
    
   }

  ngOnInit() {
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    if(index > -1){
        this.todos.splice(index , 1);
    }
    localStorage.setItem("todoStore",JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todoStore",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todoStore",JSON.stringify(this.todos));
  }

}
