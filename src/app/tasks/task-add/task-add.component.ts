import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() newTaskText: EventEmitter<any> = new EventEmitter<any>();
  inputText: String = '';
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('addTask text: ', this.inputText);
    this.newTaskText.emit(this.inputText);
    this.inputText = '';
  }

}
