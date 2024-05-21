import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentUser } from '../models/AppointmentUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-doctor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './appointment-doctor.component.html',
  styleUrl: './appointment-doctor.component.css'
})
export class AppointmentDoctorComponent {

constructor(private router : Router){}
appointments: AppointmentUser[] = [
  { id: 1, date: '2023-05-20', doctor: 'Dr. Smith', description: "ree" ,patient:"kacem"},
  { id: 2, date: '2023-05-21', doctor: 'Dr. Johnson',description : "eaa",patient:"kacem"},
  { id: 3, date: '2023-05-22', doctor: 'Dr. Lee', description : "raae" ,patient:"kacem"},
  // Add more appointments as needed
];

}
