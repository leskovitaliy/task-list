import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksService } from '../../services/tasks.service';
import { TimeService } from '../../services/time.service';
import { filter, tap } from 'rxjs/operators';
import {
  CreateTaskAction,
  DeleteTaskAction,
  LoadTasksAction,
  UpdateTaskStatusAction
} from '../../store/actions/task.actions';
import { CoreState } from '../../../core/store/reducers';
import { Observable } from 'rxjs/Observable';
import { getTaskItems } from '../../store/selectors/task.selector';
import { ITask } from '../../interfaces/task';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  newTaskText: String = '';
  taskItems$: Observable<Array<ITask>> = this.store.select(getTaskItems);

  public constructor(private store: Store<CoreState>,
                     private tasksService: TasksService,
                     private timeService: TimeService) {
  }

  public ngOnInit() {
    this.store.dispatch(new LoadTasksAction());

    this.taskItems$
      .pipe(
        filter((tasks: ITask[]) => !!tasks && !!tasks.length),
        tap((tasks: ITask[]) => {
          this.getTimePassed(tasks);
          setInterval(() => this.getTimePassed(tasks), 1000);
        })
      )
      .subscribe();
  }

  public addNewTask(name: string) {
    this.newTaskText = name;
    this.store.dispatch(new CreateTaskAction(name));
  }

  public delTask(id: number) {
    this.store.dispatch(new DeleteTaskAction(id));
  }

  public changeTaskStatus(event) {
    const { id, status } = event;
    this.store.dispatch(new UpdateTaskStatusAction({ id, status }));
  }

  public getTimePassed(tasks: ITask[]) {
    if (tasks) {
      tasks.forEach(task => {
        task.agoDate = this.timeService.getTimePassed(task.date);
      });
    }
  }

}
