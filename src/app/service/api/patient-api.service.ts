import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { IappState } from '../../model/app-state.interface';
import { LOAD_PATIENT } from '../../model/action-name';

import { ExternalMockService } from '../lib/external-mock.service';
import { Ipatient } from '../../model/patient/patient.interface';

@Injectable()
export class PatientApiService {

  constructor(
    private _ext: ExternalMockService,
    private _store: Store<IappState>,
  ) { }

  public loadPatients() {
    this._ext.getPatient$()
      .subscribe(
      (patient: Ipatient) => this._store.dispatch({ type: LOAD_PATIENT, payload: patient }),
      (err: any) => console.log(err));
  }

}
