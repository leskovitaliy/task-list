export interface ITask {
  _id: number;
  header: string;
  description: string;
  date: string;
  isDone: boolean;
  status?: string;
  agoDate?: ITimePassed;
}

export interface ITaskData {
  tasks: ITask[];
  currentPage: number;
  pages: number;
}

export interface ITimePassed {
  value: number;
  description: string;
}
