import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../interfaces/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Array<Task>;
  @Output() delTaskEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  public deleteTask(id) {
    this.delTaskEvent.emit(id);
  }

}
