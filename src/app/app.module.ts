// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// component
import { AppComponent } from './app.component';
import { PatientComponent } from './view/patient/patient.component';
import { PatientListComponent } from './view/patient/patient-list/patient-list.component';
import { PatientDetailComponent } from './view/patient/patient-detail/patient-detail.component';

// service
import { PatientService } from './service/common/patient.service';
import { PatientApiService } from './service/api/patient-api.service';
import { ExternalMockService } from './service/lib/external-mock.service';

// effects
import { MainEffects } from './service/effect/main.effects';

// reducer
import { patientReducer } from './model/patient/patient.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      patient: patientReducer,
    }),

    EffectsModule.run(MainEffects)
  ],
  providers: [
    ExternalMockService,
    PatientApiService,
    PatientService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
