import { Component, OnInit } from '@angular/core';
import { BoundElementProperty } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
animals:Array<string|number>=["dog","cat",1];
selfData:object={
  name:"sai",
  age:26
};
employeeData:Array<object>=[{
  name:"sai",
  age:26,
  place:"blore",
  email:"xyz@gmail.com"
},{
  name:"basha",
  age:27,
  place:"banglore",
  email:"yza@gmail.com" 
},{
  name:"ramesh",
  age:25,
  place:"bangalore",
  email:"abc@gmail.com"
},{
  name:"bachu",
  age:30,
  place:"bengalore",
  email:"gfh@gmail.com"
}];
homeImage:string="../assets/images/lv76tnn52h031.png";
  constructor() { }

  ngOnInit() {
  }

}
