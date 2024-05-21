import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.example.com/users';  // Replace with your API endpoint

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Get a user by ID
  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  // Create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Update an existing user
  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, user, this.httpOptions);
  }

  // Delete a user
  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }
}
