import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() options: string[] | number[];
  @Input() currentValue: string | number;
  @Input() hiddenArrow: boolean;

  @Output() changeValue: EventEmitter<any> = new EventEmitter<string | number>();

  public changeOption(option: string | number) {
    this.changeValue.emit(option);
  }
}
