import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {
  public dog: Dog;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.dog = this.route.snapshot.data['dog'];
  }

  goBack() {
    this.router.navigate(['']);
  }
}
