import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-salary-month',
  templateUrl: './salary-month.component.html',
  styleUrls: ['./salary-month.component.scss']
})
export class SalaryMonthComponent implements OnInit{
  employee={
    name:''
  }
  constructor(private services:ServicesService){}
  employeeArray: any[]=[];
  ngOnInit(): void {
    this.services.getallEmployees().subscribe((response:any)=>{
      this.employeeArray = response
      console.log(this.employeeArray)
    })
  }
  generate(){
    if (!this.employee.name){
      alert("Choose A Employee")
    }
    else{
      console.log(this.employee.name)
      const salarymonthForm = new FormData()
      salarymonthForm.append('id',this.employee.name)
      this.services.generateSalaryMonth(salarymonthForm).subscribe((response:any)=>{
        if (response.success === true){
          alert("Salary Processed")
        }
        else if(response.success === "Done"){
          alert("Salary Already Processed For This Month")
        }
        
      })
    }
    
  }

}
