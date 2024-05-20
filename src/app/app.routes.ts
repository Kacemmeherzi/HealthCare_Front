import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RvlistComponent } from './rvlist/rvlist.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'rvlist', component: RvlistComponent },
    { path: 'patients', component: PatientslistComponent },
    { path: 'doctors', component: DoctorlistComponent },




];
