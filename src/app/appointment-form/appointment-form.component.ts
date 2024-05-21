import { Component, Input, SimpleChanges } from '@angular/core';
import { User } from '../models/User';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  @Input() user: User;
  appointmentForm: FormGroup;
  doctors = [
    { id: 1, name: 'Doctor 1' },
    { id: 2, name: 'Doctor 2' },
    { id: 3, name: 'Doctor 3' },
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      
      doctor: ['',Validators.required], 
      description: ['',Validators.required],
      maladie: ['',Validators.required]  ,
      date: ['',Validators.required]  

    });
   }

 
ngOnInit(): void {
  this.appointmentForm = this.fb.group({
    doctor: ['', Validators.required],
    maladie: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required]
  });
}

  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      this.updateForm();
    }
  }

  private initForm() {
    this.appointmentForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: [''],
      email: ['']
    });
  }

  private updateForm() {
    this.appointmentForm.patchValue({
      id: this.user.id,
      name: this.user.name,
      email: this.user.email
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value); // Handle form submission logic here
    } else {
      this.appointmentForm.markAllAsTouched(); // Mark all form controls as touched to display validation errors
    }
  }
  
}
