import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { IappState } from '../../../model/app-state.interface';
import {
  UPDATE_PATIENT_NAME,
} from '../../../model/action-name';

import { Ipatient } from '../../../model/patient/patient.interface';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {

  @Input() private patientSelected: Ipatient;

  constructor(
    private _store: Store<IappState>,
  ) { }

  protected onKey(name: string) {
    this.patientSelected.name = name;
    this._store.dispatch({ type: UPDATE_PATIENT_NAME, payload: this.patientSelected});
  }

}
