import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() task: String;
  constructor() { }

  ngOnInit() {
  }

}
