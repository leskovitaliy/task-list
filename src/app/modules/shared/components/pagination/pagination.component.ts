import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() numbersOfPage: number[];
  @Input() isDisabledBackBtn: boolean;
  @Input() isDisabledNextBtn: boolean;
  @Input() currentPage: number;
  @Input() numberOfPages: number;
  @Input() itemsPerPage = 5;

  @Output() onBack: EventEmitter<any> = new EventEmitter();
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() changePerPage: EventEmitter<any> = new EventEmitter<string | number>();

  public pageBack() {
    this.onBack.emit();
  }

  public pageForward() {
    this.onNext.emit();
  }

  public changeItemsPerPage(quantity: number | string) {
    this.changePerPage.emit(quantity);
  }
}
