import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskAddComponent {
  inputText: String = '';

  @Output() newTask: EventEmitter<any> = new EventEmitter<any>();

  addTask() {
    this.newTask.emit(this.inputText);
    this.inputText = '';
  }

}
