import { Component, OnInit } from '@angular/core';
import {TasksService} from './services/tasks.service';
import {Task} from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: Array<any>;
  newTaskText: String = '';
  public constructor(private tasksService: TasksService) { }

  public ngOnInit() {
    console.log('init');
    this.tasksService.getTasks()
      .subscribe(resTasks => this.tasks = resTasks);
  }

  public addNewTask(task: any) {
    this.newTaskText = task;
    this.tasksService.addTask(task)
      .subscribe(resNewTask => {
        console.log('app resNewTask: ', resNewTask);
         this.tasks.push(resNewTask);
      });
  }
}
