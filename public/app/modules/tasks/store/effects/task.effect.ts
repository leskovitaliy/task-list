import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { catchError, map, switchMap } from 'rxjs/operators';

import {
  ActionTypes as CreateTaskActions,
  CreateTaskAction,
  CreateTaskErrorAction,
  CreateTaskSuccessAction,
  DeleteTaskAction,
  DeleteTaskErrAction,
  DeleteTaskSuccessAction,
  LoadTasksErrAction,
  LoadTasksSuccessAction,
  UpdateTaskStatusAction,
  UpdateTaskStatusErrAction,
  UpdateTaskStatusSuccessAction
} from '../actions/task.actions';

import { CoreState } from '../../../core/store/reducers';
import { TasksService } from '../../services/tasks.service';
import { ITask, ITaskData } from '../../interfaces/task';

@Injectable()
export class TaskEffects {

  // create task;
  @Effect()
  createTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(CreateTaskActions.CREATE_TASK),
      map((action: CreateTaskAction) => action.name),
      switchMap((name) => this.taskService.addTask(name)
        .pipe(
          map((newTask: ITask) => new CreateTaskSuccessAction(newTask)),
          catchError((error: any) => of(new CreateTaskErrorAction(error)))
        )
      ),
      catchError(error => _throw(error))
    );

  @Effect()
  loadTasks$: Observable<Action> = this.actions$
    .pipe(
      ofType(CreateTaskActions.LOAD_TASKS),
      switchMap(() => this.taskService.getTasks()
        .pipe(
          map((tasks: ITaskData) => new LoadTasksSuccessAction(tasks)),
          catchError((error: any) => of(new LoadTasksErrAction(error)))
        )
      ),
      catchError(error => _throw(error))
    );

  @Effect()
  deleteTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(CreateTaskActions.DELETE_TASK),
      map((action: DeleteTaskAction) => action.id),
      switchMap((id) => this.taskService.deleteTask(id)
        .pipe(
          map((deletedTask: ITask) => new DeleteTaskSuccessAction(deletedTask)),
          catchError((err: any) => of(new DeleteTaskErrAction(err)))
        )
      ),
      catchError(err => _throw(err))
    );

  @Effect()
  updateTask$: Observable<Action> = this.actions$
    .pipe(
      ofType(CreateTaskActions.UPDATE_TASK_STATUS),
      map((action: UpdateTaskStatusAction) => action.payload),
      switchMap((payload) => this.taskService.updateTask(payload.id, payload.status)
        .pipe(
          map((updatedTask: ITask) => new UpdateTaskStatusSuccessAction(updatedTask)),
          catchError((err: any) => of(new UpdateTaskStatusErrAction(err)))
        )
      ),
      catchError(err => _throw(err))
    );

  constructor(private actions$: Actions,
              private store: Store<CoreState>,
              private taskService: TasksService) {
  }

}
