import {CoreState} from '../../../core/store/reducers';
import {createSelector} from '@ngrx/store';
import {tasks} from '../reducers/task.reducer';

export const getTaskState = (state: CoreState) => state.tasks;
export const getTasks = createSelector(getTaskState, tasks);
