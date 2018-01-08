import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() newTaskText: String = '';
  inputText: String = '';
  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('addTask text: ', this.inputText);
    this.newTaskText = this.inputText;
    this.inputText = '';
  }

}
