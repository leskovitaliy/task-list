import { Action } from '@ngrx/store';
import { ITask } from '../../interfaces/task';

export const ActionTypes = {
  CREATE_TASK: '[TASK]: task create',
  CREATE_TASK_SUCCESS: '[TASK]: task create success',
  CREATE_TASK_ERROR: '[TASK]: task create error',

  LOAD_TASKS: '[TASK] load tasks',
  LOAD_TASKS_SUCCESS: '[TASK] load success tasks',
  LOAD_TASKS_ERR: '[TASK] load error tasks',

  DELETE_TASK: '[TASK] delete task',
  DELETE_TASK_SUCCESS: '[TASK] delete task success',
  DELETE_TASK_ERR: '[TASK] delete task err',

  UPDATE_TASK_STATUS: '[TASK] update task status',
  UPDATE_TASK_STATUS_SUCCESS: '[TASK] update task status success',
  UPDATE_TASK_STATUS_ERR: '[TASK] update task status err'
};

// CREATE TASK

export class CreateTaskAction implements Action {
  readonly type = ActionTypes.CREATE_TASK;

  constructor(public readonly name: string) {
  }
}

export class CreateTaskSuccessAction implements Action {
  readonly type = ActionTypes.CREATE_TASK_SUCCESS;

  constructor(public readonly payload: ITask) {
  }
}

export class CreateTaskErrorAction implements Action {
  readonly type = ActionTypes.CREATE_TASK_ERROR;

  constructor(public readonly payload?: any) {
  }
}

// LOAD TASKS

export class LoadTasksAction implements Action {
  readonly type = ActionTypes.LOAD_TASKS;

  constructor(public readonly payload?: any) {
  }
}

export class LoadTasksSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_TASKS_SUCCESS;

  constructor(public readonly payload?: ITask[]) {
  }
}

export class LoadTasksErrAction implements Action {
  readonly type = ActionTypes.LOAD_TASKS_ERR;

  constructor(public readonly payload?: any) {
  }
}

// DELETE TASK

export class DeleteTaskAction implements Action {
  readonly type = ActionTypes.DELETE_TASK;

  constructor(public readonly id: number) {
  }
}

export class DeleteTaskSuccessAction implements Action {
  readonly type = ActionTypes.DELETE_TASK_SUCCESS;

  constructor(public readonly payload?: ITask) {
  }
}

export class DeleteTaskErrAction implements Action {
  readonly type = ActionTypes.DELETE_TASK_ERR;

  constructor(public readonly payload?: any) {
  }
}

// UPDATE TASK

export class UpdateTaskStatusAction implements Action {
  readonly type = ActionTypes.UPDATE_TASK_STATUS;

  constructor(public readonly payload: { id: number, status: string }) {
  }
}

export class UpdateTaskStatusSuccessAction implements Action {
  readonly type = ActionTypes.UPDATE_TASK_STATUS_SUCCESS;

  constructor(public readonly payload: ITask) {
  }
}

export class UpdateTaskStatusErrAction implements Action {
  readonly type = ActionTypes.UPDATE_TASK_STATUS_ERR;

  constructor(public readonly payload?: any) {
  }
}

export type TaskActionsType =
  | CreateTaskAction
  | CreateTaskSuccessAction
  | CreateTaskErrorAction

  | LoadTasksAction
  | LoadTasksSuccessAction
  | LoadTasksErrAction

  | DeleteTaskAction
  | DeleteTaskSuccessAction
  | DeleteTaskErrAction

  | UpdateTaskStatusAction
  | UpdateTaskStatusSuccessAction
  | UpdateTaskStatusErrAction;
