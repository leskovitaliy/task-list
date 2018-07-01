import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from '../../interfaces/task';
import {STATUS} from '../../constants/status';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Array<ITask>;
  @Output() delTaskEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeStatusTask: EventEmitter<any> = new EventEmitter<any>();

  statuses = STATUS;

  constructor() {
}

  public deleteTask(id) {
    this.delTaskEvent.emit(id);
  }

  public changeStatus(status: string, id: string) {
    this.changeStatusTask.emit({ status: status, id: id });
  }

}
