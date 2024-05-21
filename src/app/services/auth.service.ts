import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { Observable, last } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class AuthService{
    private  apiUrl = 'http://localhost:6060/auth/';

    constructor(private http: HttpClient) {}
    isAuthenticated(): boolean {
      return !!localStorage.getItem('token');
    }
    userRole() : String {
        return localStorage.getItem('userRole')
    };
    login(email: string, password: string):Observable<HttpResponse<any>> {
      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
  
      const body = { email, password };
  
      return this.http.post<any>(this.apiUrl+"signin", body  , { observe: 'response' });
    }
    register( fname : string , lname : string , email : string ,password: string , role : string):Observable<HttpResponse<any>> {
      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
  
      const body = {fname,lname, email, password, role };
    console.log(body);
    
      return this.http.post<any>(this.apiUrl+"register", body, { observe: 'response' })
    
         
    }
    logout () {
  localStorage.clear()
  
    }
    saveUser(data) {
  
      localStorage.setItem("userid",data.user._id)
      localStorage.setItem("token",data.token)

  
    }
}