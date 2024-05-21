import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  constructor(private router : Router){}
  @Input() user: User | null = null;



  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras.state?.['user'] || null;
  }
}
