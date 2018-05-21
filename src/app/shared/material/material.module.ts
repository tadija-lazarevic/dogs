import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule { }
