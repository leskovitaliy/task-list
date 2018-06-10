export class ITask {
  _id: number;
  header: string;
  description: string;
  date: string;
  isDone: boolean;
  status?: string;
  agoDate?: ITimePassed;
}

export class ITimePassed {
  value: number;
  description: string;
}
