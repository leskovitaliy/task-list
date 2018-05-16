import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { taskListReducer, TaskListState } from '../../../tasks/store/reducers/task.reducer';

export interface CoreState {
  router: RouterReducerState;

  tasks: TaskListState;
}

export const reducers: ActionReducerMap<CoreState> = {
  tasks: taskListReducer,
  router: routerReducer
};
