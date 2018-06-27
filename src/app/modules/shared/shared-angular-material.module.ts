import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatRadioModule,
  MatSelectModule, MatSnackBarModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,

    MatDatepickerModule,
    MatNativeDateModule,

    MatDialogModule
  ],
})
export class SharedMaterialModule {
}
