import { Component } from '@angular/core';
import { AppointmentUser } from '../models/AppointmentUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-patient.component.html',
  styleUrl: './appointment-patient.component.css'
})
export class AppointmentPatientComponent {
  appointments: AppointmentUser[] = [
    { id: 1, date: '2023-05-20', doctor: 'Dr. Smith', description: "ree" ,patient:"kacem"},
    { id: 2, date: '2023-05-21', doctor: 'Dr. Johnson',description : "eaa",patient:"kacem"},
    { id: 3, date: '2023-05-22', doctor: 'Dr. Lee', description : "raae",patient:"kacem" },
    // Add more appointments as needed
  ];
}
