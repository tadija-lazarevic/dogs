import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [

  ],
  providers: [SnackbarService],
  declarations: []
})
export class SharedModule { }
