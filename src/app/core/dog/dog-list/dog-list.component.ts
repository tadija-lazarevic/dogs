import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {
  public dogs: Dog[];
  public searchText: string;

  constructor(
    private dogService: DogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.dogService.getBreedList().subscribe(dogs => (this.dogs = dogs));
  }

  goToDog(breed: string) {
    this.router.navigate(['dog-details', breed]);
  }
}
