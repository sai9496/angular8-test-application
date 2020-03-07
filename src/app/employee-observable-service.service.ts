import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeObservableServiceService {

  constructor(private http: HttpClient) { }
  public getEmployee456(): Observable<Employee[]> {
    const url = "../assets/data.json";
    return this.http.get<Employee[]>(url);
  }
}
