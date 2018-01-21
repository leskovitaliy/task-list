import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  @Output() newTask: EventEmitter<any> = new EventEmitter<any>();
  inputText: String = '';
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('addTask text: ', this.inputText);
    this.newTask.emit(this.inputText);
    this.inputText = '';
  }

}
