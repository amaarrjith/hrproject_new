import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-employeesalary',
  templateUrl: './employeesalary.component.html',
  styleUrls: ['./employeesalary.component.scss']
})
export class EmployeesalaryComponent implements OnInit{
  salaryArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const employeeID = sessionStorage.getItem('guestID')
    this.services.salaryEmployee(employeeID).subscribe((response:any)=>{
      console.log(response)
      this.salaryArray = response
    })
  }

}
