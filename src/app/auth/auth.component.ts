import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,LoginComponent,SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authservice : AuthService){}
  showLogin: boolean = true;
   islogged () : boolean {
    return this.authservice.isAuthenticated()
   }
  // Method to toggle between login and registration components
  toggleForm() {
    this.showLogin = !this.showLogin;
  }
}
