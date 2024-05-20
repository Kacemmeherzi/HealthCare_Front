import { Component } from '@angular/core';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctorlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctorlist.component.html',
  styleUrl: './doctorlist.component.css'
})
export class DoctorlistComponent {
  users: User[] = [
    {
      _id: '1',
      username: 'john_doe',
      email: 'john@example.com'
    },
    {
      _id: '2',
      username: 'jane_smith',
      email: 'jane@example.com'
    },
    {
      _id: '3',
      username: 'alice_jones',
      email: 'alice@example.com'
    }
  ];
}
