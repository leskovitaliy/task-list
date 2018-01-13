import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newTestTask: String = '';
  constructor() { }

  ngOnInit() {
    console.log('init');
  }

  onSelectNewTask(task: any) {
    this.newTestTask = task;
    console.log('this.newTask', this.newTestTask);
  }
}
