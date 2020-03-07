import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeeAlert() {
    alert("This is employee service");
  };
  employeeTestData = [
    {
      Sno: 1,
      name: "sai",
      place: "blore",
      service: "test service"
    }, {
      Sno: 2,
      name: "basha",
      place: "banglore",
      service: "test service1"
    }, {
      Sno: 3,
      name: "ramesh",
      place: "benglore",
      service: "test service2"
    }, {
      Sno: 4,
      name: "bachu",
      place: "bengalore",
      service: "test service4"
    }
  ];
  constructor() { }
}
