import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-employeeindex',
  templateUrl: './employeeindex.component.html',
  styleUrls: ['./employeeindex.component.scss']
})
export class EmployeeindexComponent implements OnInit{
  employeename: any;
  post: any;
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const employeeID = sessionStorage.getItem('guestID')
    this.services.getEmployee(employeeID).subscribe((response:any)=>{
      this.employeename = response.employee_name
      this.post = response.post
      console.log(response)
    })
  }

}
