import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IappState } from '../../model/app-state.interface';
import { Store } from '@ngrx/store';

import { Ipatient } from '../../model/patient/patient.interface';

@Injectable()
export class PatientService {

  public patient$: Observable<Ipatient[]>;
  public patientSelected$: Observable<Ipatient>;

  constructor(
    private _store: Store<IappState>,
  ) {

    this.patient$ = this._store.select('patient');

    this.patientSelected$ = this.patient$
      .map((aPat: Ipatient[]) => aPat.find((pat: Ipatient) => pat.selected));

  }

}
