import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  strike:"strikethrough";
  constructor() { }

  ngOnInit() {
  }
  onClick(todo1: Todo){
    this.todoDelete.emit(todo1);
    console.log("onclick has been triggered")
  }

  onCheckboxClick(todo){
    console.log(todo)
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }
}
