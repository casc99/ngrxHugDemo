import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PatientApiService } from './service/api/patient-api.service';
import { Ipatient } from './model/patient/patient.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected patient$: Observable<Ipatient[]>;

  constructor(
    private _patientApiService: PatientApiService,
  ) { }

  ngOnInit() {
    this._patientApiService.loadPatients();
  }
}
