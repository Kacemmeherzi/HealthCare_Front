import { Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   @Output() switchToLoginevent = new EventEmitter<void>();

   switchToLogin() : void {
       this.switchToLoginevent.emit()
   }
  myForm: FormGroup;


  constructor(private formBuilder : FormBuilder, private authservice :AuthService){
    this.myForm = this.formBuilder.group({
        
      fname: ['',Validators.required], 
      lname: ['',Validators.required],
      email: ['',Validators.required], 
      password: ['',Validators.required], 
      cpassword: ['',Validators.required], 
      selection: ['option2']
 
  
    });
  }
  Isformvalid () : boolean {
    if (this.myForm.valid && this.myForm.value.password == this.myForm.value.cpassword){

      return true
    } else {
      alert("verifer les donnees saisie")
      return false
    } ; 

  }

  
  onSubmit() : void{
    if (this.Isformvalid()) {
      console.log(this.myForm.value);
      
    
    
  this.authservice.register(this.myForm.value.fname,this.myForm.value.lname,
    this.myForm.value.email,this.myForm.value.password,this.myForm.value.selection).subscribe({
    next :  (response : HttpResponse<any> ) => {
      //this.loadingService.hide()

      if (response.status===200) {
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
  
}
