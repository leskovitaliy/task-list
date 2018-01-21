import {Component, Input} from '@angular/core';
import {Task} from '../models/task';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Array<Task>;
  constructor(private taskService: TasksService) { }

  public deleteTask(id) {
    this.taskService.deleteTask(id);
  }

}
