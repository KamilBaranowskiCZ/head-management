import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor() { }

  getPositions() {
    return of([
      { name: "Shop Asisstant", numberOfWorkers: 100, numberOfVacancy: 15 },
      { name: "Shom Master", numberOfWorkers: 20, numberOfVacancy: 2 },
    ])
  }
}
