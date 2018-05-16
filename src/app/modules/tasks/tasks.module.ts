import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// routing
import { TasksRoutingModule } from './tasks-routing.module';

// components
import { TaskPageComponent } from './pages/task-page/task-page.component';
import {TaskAddComponent} from './components/task-add/task-add.component';
import {TaskListComponent} from './components/task-list/task-list.component';

// services
import {TasksService} from './services/tasks.service';
import {TimeService} from './services/time.service';
import { SelectComponent } from './components/select/select.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../core/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TasksRoutingModule,
    SharedModule
    // EffectsModule.forRoot(coreEffects),
  ],
  declarations: [
    TaskPageComponent,
    TaskAddComponent,
    TaskListComponent,
    SelectComponent
  ],
  providers: [
    TasksService,
    TimeService
  ]
})
export class TasksModule { }
