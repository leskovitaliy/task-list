import { Action } from '@ngrx/store';
import { ITask } from '../../interfaces/task';

export const ActionTypes = {
  CREATE_TASK: '[TASK]: task add'
};

export class CreateTaskAction implements Action {
  readonly type = ActionTypes.CREATE_TASK;

  constructor(public readonly payload: ITask) {}
}

export type TaskActionsType =
  | CreateTaskAction;
