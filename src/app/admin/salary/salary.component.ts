import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit{
  
  salaryArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.services.salary().subscribe((response:any)=>{
      
    })
    this.services.viewSalary().subscribe((response:any)=>{
      this.salaryArray = response
      console.log(this.salaryArray)
    })
  }

  edit(id:any){}
  delete(id:any){}
  
}
