import {
  ActionTypes,
  CreateTaskErrorAction,
  CreateTaskSuccessAction,
  DeleteTaskErrAction,
  DeleteTaskSuccessAction,
  LoadTasksErrAction,
  LoadTasksSuccessAction,
  TaskActionsType,
  UpdateTaskStatusErrAction,
  UpdateTaskStatusSuccessAction
} from '../actions/task.actions';
import { ITask } from '../../interfaces/task';


export interface ITaskListState {
  task: ITask;
  taskItems: Array<ITask>;
  creating: boolean;
  createErr: any;

  taskLoading: boolean;
  loadErr: any;

  deleting: boolean;
  deleteErr: any;

  updatingTask: boolean;
  updatingTaskErr: any;
}

export const initialState: ITaskListState = {
  task: null,
  taskItems: [],
  creating: false,
  createErr: null,

  taskLoading: false,
  loadErr: null,

  deleting: false,
  deleteErr: null,

  updatingTask: false,
  updatingTaskErr: null
};

export function taskListReducer(state: ITaskListState = initialState,
                                action: TaskActionsType): ITaskListState {

  switch (action.type) {

    // CREATE TASK

    case ActionTypes.CREATE_TASK: {
      return {
        ...state,
        creating: true
      };
    }

    case ActionTypes.CREATE_TASK_SUCCESS: {
      const { payload } = action as CreateTaskSuccessAction;

      return {
        ...state,
        task: null,
        taskItems: [...state.taskItems, payload],
        creating: false,
        createErr: null
      };
    }

    case ActionTypes.CREATE_TASK_ERROR: {
      const { payload } = action as CreateTaskErrorAction;

      return {
        ...state,
        creating: false,
        createErr: payload
      };
    }

    // LOAD TASK

    case ActionTypes.LOAD_TASKS: {
      return {
        ...state,
        taskLoading: true
      };
    }

    case ActionTypes.LOAD_TASKS_SUCCESS: {
      const { payload } = action as LoadTasksSuccessAction;
      return {
        ...state,
        taskItems: [...state.taskItems, ...payload],
        taskLoading: false,
        loadErr: null
      };
    }

    case ActionTypes.LOAD_TASKS_ERR: {
      const { payload } = action as LoadTasksErrAction;
      return {
        ...state,
        loadErr: payload,
        taskLoading: false
      };
    }

    // DELETE TASK

    case ActionTypes.DELETE_TASK: {
      return {
        ...state,
        deleting: true
      };
    }

    case ActionTypes.DELETE_TASK_SUCCESS: {
      const { payload } = action as DeleteTaskSuccessAction;
      const taskItems = state.taskItems.filter((task) => task._id !== payload._id);

      return {
        ...state,
        taskItems,
        deleting: false,
        deleteErr: null
      };
    }

    case ActionTypes.DELETE_TASK_ERR: {
      const { payload } = action as DeleteTaskErrAction;
      return {
        ...state,
        deleteErr: payload,
        deleting: false
      };
    }

    // UPDATE TASK STATUS

    case ActionTypes.UPDATE_TASK_STATUS: {
      return {
        ...state,
        updatingTask: true
      };
    }

    case ActionTypes.UPDATE_TASK_STATUS_SUCCESS: {
      const { payload } = action as UpdateTaskStatusSuccessAction;
      const taskItems = state.taskItems.map((task) => {
        if (task._id === payload._id) {
          return {
            ...task,
            status: payload.status
          };
        }
        return task;
      });

      return {
        ...state,
        taskItems,
        updatingTask: false,
        updatingTaskErr: null,
      };
    }

    case ActionTypes.UPDATE_TASK_STATUS_ERR: {
      const { payload } = action as UpdateTaskStatusErrAction;
      return {
        ...state,
        updatingTask: false,
        updatingTaskErr: payload
      };
    }

    default: {
      return {
        ...state
      };
    }

  }
}

export const task = (state: ITaskListState) => state.task;
export const taskItems = (state: ITaskListState) => state.taskItems;
