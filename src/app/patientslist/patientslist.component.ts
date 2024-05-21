import { Component } from '@angular/core';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientslist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './patientslist.component.html',
  styleUrl: './patientslist.component.css'
})
export class PatientslistComponent {
  constructor(private router : Router){}
  searchTerm : string ;
  users: User[] = [
    {
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      specialite: "blblb",
      name : "Dhia"
      ,number : "50555555"

    },{
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      specialite: "blblb",
      name : "Dhia",      number : "50555555"


    },{
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      specialite: "blblb",
      name : "Dhia"      ,number : "50555555"


    },
   
  ];
  searchPatient(){}
  viewUserInfo(user: User) {
    this.router.navigate(['/user-info'], { state: { user } });
  }
}
