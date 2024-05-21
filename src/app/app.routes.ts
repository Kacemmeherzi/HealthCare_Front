import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { AppointmentDoctorComponent } from './appointment-doctor/appointment-doctor.component';
import { AppointmentPatientComponent } from './appointment-patient/appointment-patient.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'patients', component: PatientslistComponent },
    { path: 'doctors', component: DoctorlistComponent },
 
    { path: 'apdoctor', component: AppointmentDoctorComponent },

    { path: 'appatient', component: AppointmentPatientComponent },
    { path: 'app-form', component: AppointmentFormComponent },
    { path: 'user-info', component: UserInfoComponent },



 

];
