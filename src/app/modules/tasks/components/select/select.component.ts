import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: string[];
  @Input() currentValue: string;
  @Output() updateStatus: EventEmitter<any> = new EventEmitter<any>();

  edit: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  changeOption(status: string) {
    this.updateStatus.emit(status);
    this.edit = false;
  }

}
