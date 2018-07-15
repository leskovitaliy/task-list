import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { taskListReducer, ITaskListState } from '../../../tasks/store/reducers/task.reducer';
import { RouterStateUrl } from './router.reducer';

export interface CoreState {
  router: RouterReducerState<RouterStateUrl>;

  task: ITaskListState;
}

export const reducers: ActionReducerMap<CoreState> = {
  task: taskListReducer,
  router: routerReducer
};
