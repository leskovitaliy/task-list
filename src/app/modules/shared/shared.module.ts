import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedMaterialModule} from './shared-angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})
export class SharedModule {
}
