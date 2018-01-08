import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
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
