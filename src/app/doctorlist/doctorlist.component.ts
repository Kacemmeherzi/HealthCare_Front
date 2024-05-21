import { Component } from '@angular/core';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctorlist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './doctorlist.component.html',
  styleUrl: './doctorlist.component.css'
})
export class DoctorlistComponent {
  constructor(private router : Router){}
  searchTerm: string = '';

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
      name : "Dhia"      ,number : "50555555"


    },{
      id: '1',
      username: 'john_doe',
      email: 'john@example.com',
      specialite: "blblb",
      name : "Dhia"      ,number : "50555555"


    },
  ];
  navigateToUserForm(user : User) {
    console.log(user);
    
    this.router.navigate(['/user-form'], { queryParams: { user: JSON.stringify(user) } });
  }
  searchDoctor() {}
}
