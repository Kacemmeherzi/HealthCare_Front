import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  // Define an array to store appointments
  private appointments: any[] = [];

  constructor() { }

  // Create a new appointment
  createAppointment(newAppointment: any): void {
    this.appointments.push(newAppointment);
  }

  // Read all appointments
  getAllAppointments(): any[] {
    return this.appointments;
  }

  // Read a single appointment by its ID
  getAppointmentById(appointmentId: number): any {
    return this.appointments.find(appointment => appointment.id === appointmentId);
  }

  // Update an existing appointment by its ID
  updateAppointment(appointmentId: number, updatedAppointment: any): void {
    const index = this.appointments.findIndex(appointment => appointment.id === appointmentId);
    if (index !== -1) {
      this.appointments[index] = { ...this.appointments[index], ...updatedAppointment };
    }
  }

  // Delete an appointment by its ID
  deleteAppointment(appointmentId: number): void {
    this.appointments = this.appointments.filter(appointment => appointment.id !== appointmentId);
  }
}
