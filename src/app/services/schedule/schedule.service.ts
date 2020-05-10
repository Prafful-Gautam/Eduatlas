import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
authToken = localStorage.getItem('token')
  headers = new HttpHeaders().set('authorization', 'Bearer ' + this.authToken)
  
  httpOptions = {
    headers: this.headers,
  };
  constructor(private http:HttpClient) { }

  addSchedule(schedule){
    return this.http.post<any>(`http://139.59.26.154:5000/institute/schedule`, schedule, this.httpOptions ).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError)
    )
  }

  getSchedule(params){
    return this.http.get<any>(`http://139.59.26.154:5000/institute/schedule/`,
     {params: params, headers: this.headers}).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:any){
    console.log(error);
    return throwError(error);
  }  
}
