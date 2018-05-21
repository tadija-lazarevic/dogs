import { Injectable } from '@angular/core';
import {
  HttpModule,
  Http,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Dog } from './dog';

@Injectable()
export class DogService {
  rootAPI = 'https://dog.ceo/api';

  constructor(private http: Http, private snackBar: SnackbarService) {}

  getBreedList(): Observable<Dog[]> {
    const url = `${this.rootAPI}/breeds/list`;

    return this.http.get(url).map(res => {
      const result = res.json();
      const { message, status } = result;

      if (status === 'success') {
        return message.map(breed => {
          return new Dog(breed, '', '');
        });
      }
    });
  }

  getBreedImages(dog): Observable<Dog> {
    const url = `${this.rootAPI}/breed/${dog.breed}/images`;

    return this.http.get(url).map(res => {
      const result = res.json();
      const { message, status } = result;

      if (status === 'success') {
        return message.map(image => {
          return (dog.imageUrl = image[0]);
        });
      }
    });
  }

  getRandomBreedImage(breed) {
    const url = `${this.rootAPI}/breed/${breed}/images/random`;

    return this.http.get(url).map(res => {
      const result = res.json();
      const { message, status } = result;

      if (status === 'success') {
        return new Dog(breed, message, '');
      }
    });
  }
}
