import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { DogModule } from './dog/dog.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DogModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class CoreModule { }
