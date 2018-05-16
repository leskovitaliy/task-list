import {ActionTypes, TaskActionsType} from '../actions/task.actions';


export interface TaskListState {
  tasks: any;
}

export const initialState: TaskListState = {
  tasks: null
};

export function taskListReducer(state: TaskListState = initialState,
                                action: TaskActionsType): any {

  const { payload } = action;

  switch (action.type) {

    case ActionTypes.CREATE_TASK: {
      return {
        ...state
      };
    }

    default: {
      return {
        ...state
      };
    }

  }
}

export const tasks = (state: TaskListState) => state.tasks;
