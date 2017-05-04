import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/take';

import { patientArray } from '../../../assets/data/patient.data';

@Injectable()
export class ExternalMockService {

  constructor() { }

  public getPatient$() {

    return IntervalObservable
      .create(500)
      .take(patientArray.length)
      .map((i) => patientArray[i]);

  }

}
