import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Ipatient } from '../../model/patient/patient.interface';

import {
    LOAD_PATIENT,
    LOAD_PATIENT_DEFAULT,
} from '../..//model/action-name';

@Injectable()
export class MainEffects {

    @Effect() patientDefault$: Observable<Action>;

    constructor(
        private actions$: Actions
    ) {
        this.patientDefault$ = actions$
            .ofType(LOAD_PATIENT)
            .map((action: Action) => {
                const patient = action.payload as Ipatient;
                if (patient.name === 'Bombasto') {
                    patient.selected = true;
                } else {
                    patient.selected = false;
                }
                console.log('effects', patient);
                return { type: LOAD_PATIENT_DEFAULT, payload: patient };
            }
            );
    }

}
