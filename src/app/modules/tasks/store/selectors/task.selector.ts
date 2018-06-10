import {CoreState} from '../../../core/store/reducers';
import {createSelector} from '@ngrx/store';
import { taskItems, task } from '../reducers/task.reducer';

export const getTaskState = (state: CoreState) => state.task;
export const getTask = createSelector(getTaskState, task);
export const getTaskItems = createSelector(getTaskState, taskItems);

