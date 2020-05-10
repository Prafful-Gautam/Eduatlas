import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface User{
	phone:string,
	password:string
}

interface signupType{
  name:string;
  phone:string;
  email:string;
  password:string;
  
 
}
@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http:HttpClient) { }
  findUser(phone: string){
    return this.http.get<{User: any}>('http://139.59.26.154:5000/users/' + phone);
  }
  
  instituteLogin(user:User){
  	return this.http.post<{token: string, expireIn: string, phone: string, userName:string, role:string}>('http://139.59.26.154:5000/users/login',user)
  }

  instituteSignup(signUp:signupType){
  	return this.http.post('http://139.59.26.154:5000/users/signup',signUp)
  }
}
