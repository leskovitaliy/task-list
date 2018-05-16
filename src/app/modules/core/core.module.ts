import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import {AppRoutingModule} from '../../app-routing.module';


// store
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { reducers } from './store/reducers';
import {TasksModule} from '../tasks/tasks.module';
import {CustomRouterStateSerializer} from './store/custom-router-state-serializer';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TasksModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, [storeFreeze] as any),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide:  RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    }
  ],
  declarations: [],
  exports:      [
    AppRoutingModule
  ]
})
export class CoreModule { }
