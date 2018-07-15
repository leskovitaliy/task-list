import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TasksService} from '../../services/tasks.service';
import {TimeService} from '../../services/time.service';
import {filter, tap} from 'rxjs/operators';
import {CreateTaskAction, DeleteTaskAction, LoadTasksAction, UpdateTaskStatusAction} from '../../store/actions/task.actions';
import {CoreState} from '../../../core/store/reducers';
import {Observable} from 'rxjs/Observable';
import {getTaskItems} from '../../store/selectors/task.selector';
import {ITask} from '../../interfaces/task';
import {NUMBER_OF_PAGES, QUANTITY_PER_PAGE_BY_DEFAULT} from '../../../shared/constants/pagination';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  readonly options = NUMBER_OF_PAGES;
  itemsPerPage = QUANTITY_PER_PAGE_BY_DEFAULT;

  searchText = '';
  newTaskText = '';
  tasks: ITask[];
  currentPage = 0;

  taskItems$: Observable<Array<ITask>> = this.store.select(getTaskItems);

  public constructor(private store: Store<CoreState>,
                     private tasksService: TasksService,
                     private timeService: TimeService) {
  }

  public ngOnInit() {
    this.store.dispatch(new LoadTasksAction());

    this.taskItems$
      .pipe(
        filter((tasks: ITask[]) => !!tasks && !!tasks.length),
        tap((tasks: ITask[]) => {
          this.getTimePassed(tasks);
          setInterval(() => this.getTimePassed(tasks), 1000);
        })
      )
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  public addNewTask(name: string) {
    this.newTaskText = name;
    this.store.dispatch(new CreateTaskAction(name));
  }

  public delTask(id: number) {
    this.store.dispatch(new DeleteTaskAction(id));
  }

  public changeTaskStatus(event) {
    const { id, status } = event;
    this.store.dispatch(new UpdateTaskStatusAction({ id, status }));
  }

  public getTimePassed(tasks: ITask[]) {
    if (tasks) {
      tasks.forEach(task => {
        task.agoDate = this.timeService.getTimePassed(task.date);
      });
    }
  }

  // pagination

  public startingItem() {
    return this.currentPage * this.itemsPerPage;
  }

  public changeItemsPerPage(quantityShowPage: number) {
    this.itemsPerPage = quantityShowPage;
  }

  public numberOfPages() {
    return Math.ceil(this.tasks.length / this.itemsPerPage);
  }

  public isFirstPage() {
    return this.currentPage === 0;
  }

  public isLastPage() {
    const lastPageNum = Math.ceil(this.tasks.length / this.itemsPerPage - 1);
    return this.currentPage === lastPageNum;
  }

  showPrevPage() {
    this.currentPage = this.currentPage - 1;
  }
  showNextPage() {
    this.currentPage = this.currentPage + 1;
  }

}
