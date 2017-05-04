import { ActionReducer, Action } from '@ngrx/store';

import { Ipatient } from './patient.interface';
import {
    LOAD_PATIENT,
    PATIENT_SELECTED,
    UPDATE_PATIENT_NAME,
} from '../action-name';

export function patientReducer(state: Ipatient[] = [], action: Action): Ipatient[] {
    switch (action.type) {

        case LOAD_PATIENT:
            return state.concat([action.payload]);

        case PATIENT_SELECTED:
            return state.map((pat: Ipatient) => {
                if (pat.id === action.payload.id) {
                    pat.selected = true;
                } else {
                    pat.selected = false;
                }
                return pat;
            });

        case UPDATE_PATIENT_NAME:
            return state.map((pat: Ipatient) => {
                if (pat.id === action.payload.id) {
                    pat.name = action.payload.name;
                }
                return pat;
            });

        default:
            return state;
    }
}