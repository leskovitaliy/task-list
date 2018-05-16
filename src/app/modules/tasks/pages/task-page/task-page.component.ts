import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {TimeService} from '../../services/time.service';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {CreateTaskAction} from '../../store/actions/task.actions';
import {CoreState} from '../../../core/store/reducers';
import {Observable} from 'rxjs/Observable';
import {getTasks} from '../../store/selectors/task.selector';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  tasks: Array<any>;
  newTaskText: String = '';
  tasks$: Observable<any> = this.store.select(getTasks);

  public constructor(private store: Store<CoreState>,
                     private tasksService: TasksService,
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
    this.store.dispatch(new CreateTaskAction(task));
    console.log('this.store', this.store);
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

  public changeTaskStatus(event) {
    this.tasksService.updateTask(event.id, event.status)
      .subscribe(updateTask => {
        const task = this.tasks.find(currentTask => currentTask._id === updateTask['_id']);
        if (task) {
          task.status = updateTask['status'];
        }
        });
  }

  public getTimePassed(tasks) {
    if (tasks) {
      tasks.forEach(task => {
        task.agoDate = this.timeService.getTimePassed(task.date);
        // console.log('task.agoDate', task.agoDate);
      });
    }
  }

}
