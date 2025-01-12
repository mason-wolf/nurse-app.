import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientsComponent } from './patients/patients.component';
import { VisitsComponent } from './visits/visits.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'schedule', component: DashboardComponent },
  { path : 'patient-profile/:patient_id', component: PatientProfileComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'visits', component: VisitsComponent},
  { path: 'map', component: MapComponent},
  { path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
