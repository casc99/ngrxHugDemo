import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PatientService } from '../../service/common/patient.service';
import { Ipatient } from '../../model/patient/patient.interface';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientComponent implements OnInit {

  protected patient$: Observable<Ipatient[]>;
  protected patientSelected$: Observable<Ipatient>;

  constructor(
    private _patientService: PatientService,
  ) { }

  ngOnInit() {
    this.patient$ = this._patientService.patient$;
    this.patientSelected$ = this._patientService.patientSelected$;
  }

}
