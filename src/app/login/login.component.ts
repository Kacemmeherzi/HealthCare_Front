import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent   {
  
  myForm: FormGroup;
  @Output() switchToRegistration = new EventEmitter<void>();
  switchToRegistrationClicked() {
    this.switchToRegistration.emit();
  }

constructor(private formBuilder : FormBuilder,private authservice : AuthService , private router : Router){
  this.myForm = this.formBuilder.group({
      
    email: ['',Validators.required], 
    password: ['',Validators.required], 

  });
}



  





login(): void {
     const email = this.myForm.value.email;
     const password = this.myForm.value.password ; 
  if (!email || !password) {
    console.error('Username and password are required');
    alert("please enter your cridentials")

    return;
  }
 // this.loadingService.show()

  this.authservice.login(email, password).subscribe({
      next :  (response : HttpResponse<any> ) => {
        //this.loadingService.hide()

        if (response.status===200) {
            this.authservice.saveUser(response.body);
           // this.router.navigate(["/home"])
            

        }
    


      },
      error : (err) => {console.log("aa", err.message);
      alert(err.message)
      //this.loadingService.hide()

      }
  
})

  
  
}

  
 
}