import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { IappState } from '../../../model/app-state.interface';
import {
  PATIENT_SELECTED,
} from '../../../model/action-name';

import { Ipatient } from '../../../model/patient/patient.interface';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {

  @Input() patientList: Ipatient[];

  constructor(private _store: Store<IappState>) { }

  protected patientSelected(patient: Ipatient) {
    this._store.dispatch({ type: PATIENT_SELECTED, payload: patient });

  }

}
