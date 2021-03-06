import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleAssignService {
 token = localStorage.getItem('token'); 
 headers = new HttpHeaders().set('authorization', 'Bearer ' + this.token);
  

 httpOptions = {
   headers: this.headers,
 };
  constructor(private http: HttpClient) { }

  addRole(role): Observable<any>{
    return this.http.post<any>(`http://139.59.26.154:5000/institute/role`, role, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }


  getOtp(phone, params) {
    return this.http.get<any>(`http://139.59.26.154:5000/users/sendOTP/${phone}`, {params: params}).pipe(
      tap((res: any) => console.log(res)),
      catchError(this.handleError),
    );
  }
  verifyOtp(params){
    return this.http.get<any>('http://139.59.26.154:5000/users/varifyOTP', {params: params}).pipe(
      tap(res => console.log(res)),
      catchError(err => this.handleError(err)),
    );
  }
  private handleError(error: any){
    console.log(error);
    return throwError(error);
}
}
