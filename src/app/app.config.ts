import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AppointmentService } from './services/appointment.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , AuthService,provideHttpClient(),UserService,AppointmentService]
};
