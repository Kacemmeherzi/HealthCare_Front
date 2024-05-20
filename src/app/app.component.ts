import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthComponent,DashboardComponent,HomeComponent,AuthComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'healthcare_front';

  constructor (private authservice : AuthService) {}


 isAuthed() : boolean {
 return this.authservice.isAuthenticated() }
}
