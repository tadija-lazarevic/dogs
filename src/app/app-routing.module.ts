import { NgModule, Injectable } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { DogListComponent } from './core/dog/dog-list/dog-list.component';
import { DogDetailsComponent } from './core/dog/dog-details/dog-details.component';
import { Dog } from './core/dog/dog';
import { DogService } from './core/dog/dog.service';

@Injectable()
export class DogResolve implements Resolve<Dog> {
  constructor(private dogService: DogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dogService.getRandomBreedImage(route.paramMap.get('breed'));
  }
}

const routes: Routes = [
  {
    path: '',
    component: DogListComponent
  },
  {
    path: 'dog-details/:breed',
    component: DogDetailsComponent,
    resolve: {
      dog: DogResolve
    }
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DogResolve]
})
export class AppRoutingModule {}
