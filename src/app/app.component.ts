import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newTaskText: String = '';
  constructor() { }

  ngOnInit() {
    console.log('init');
  }

  addNewTask(task: any) {
    this.newTaskText = task;
    console.log('this.newTaskText', this.newTaskText);
  }
}
