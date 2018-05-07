import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {TimeService} from '../../services/time.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  tasks: Array<any>;
  newTaskText: String = '';

  public constructor(private tasksService: TasksService,
                     private timeService: TimeService) {
  }

  public ngOnInit() {
    console.log('init');
    this.tasksService.getTasks()
      .pipe(
        tap((resTasks) => {
          this.getTimePassed(resTasks);
          setInterval(() => this.getTimePassed(this.tasks), 1000);
        }),
      )
      .subscribe(resTasks => {
        this.tasks = resTasks;
      });
  }

  public addNewTask(task: any) {
    this.newTaskText = task;
    this.tasksService.addTask(task)
      .subscribe(resNewTask => {
        console.log('app resNewTask: ', resNewTask);
        this.tasks.push(resNewTask);
        this.getTimePassed(this.tasks);
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

  public getTimePassed(tasks) {
    if (tasks) {
      tasks.forEach(task => {
        task.agoDate = this.timeService.getTimePassed(task.date);
        console.log('task.agoDate', task.agoDate);
      });
    }
  }

}
