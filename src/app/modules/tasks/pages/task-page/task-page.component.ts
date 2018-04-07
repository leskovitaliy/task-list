import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  tasks: Array<any>;
  newTaskText: String = '';

  public constructor(private tasksService: TasksService) {
  }

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

  public delTask(id: string) {
    console.log('ev id', id);
    this.tasksService.deleteTask(id)
      .subscribe(removedTask => {
        if (removedTask) {
          this.tasks.forEach((task, index) => {
            if (task._id === removedTask['_id']) {
              this.tasks.splice(index, 1);
              console.log('removed task: ', removedTask);
            }
          });
        }
      });
  }

}