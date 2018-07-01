import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedMaterialModule} from './modules/shared-angular-material.module';
import {StartFromPipe} from './pipes/start-from.pipe';
import {LimitToPipe} from './pipes/limit-to.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import {SelectComponent} from './components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  declarations: [
    StartFromPipe,
    LimitToPipe,
    PaginationComponent,
    SelectComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    StartFromPipe,
    LimitToPipe,
    PaginationComponent,
    SelectComponent
  ]
})
export class SharedModule {
}
