import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';

import { TaskPageComponent } from './pages/task-page/task-page.component';
import {TaskAddComponent} from './components/task-add/task-add.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TasksService} from './services/tasks.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TasksRoutingModule
  ],
  declarations: [
    TaskPageComponent,
    TaskAddComponent,
    TaskListComponent
  ],
  providers: [TasksService]
})
export class TasksModule { }
