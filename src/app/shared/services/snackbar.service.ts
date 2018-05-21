import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) {   }

  open(text = 'test') {
    this.snackBar.open(text);
  }
}
