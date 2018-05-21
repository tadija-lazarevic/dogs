import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { DogRoutingModule } from './dog-routing.module';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogService } from './dog.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { Http, HttpModule } from '@angular/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DogRoutingModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DogService,
    SnackbarService
  ],
  declarations: [
    DogListComponent,
    DogDetailsComponent,
    FilterPipe
  ]
})
export class DogModule { }
