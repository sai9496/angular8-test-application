import { Component, OnInit } from '@angular/core';
import { EmployeeObservableServiceService } from '../employee-observable-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public getEmployeeFinalData = [];
  constructor(private getObservableService123: EmployeeObservableServiceService) { }

  ngOnInit() {
    this.getObservableService123.getEmployee456().subscribe(demo => this.getEmployeeFinalData = demo);
  }

}
