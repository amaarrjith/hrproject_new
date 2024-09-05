import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewsalary',
  templateUrl: './viewsalary.component.html',
  styleUrls: ['./viewsalary.component.scss']
})
export class ViewsalaryComponent implements OnInit{
  salaryArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.services.salary().subscribe((response:any)=>{
      this.services.viewSalary().subscribe((response:any)=>{
        this.salaryArray = response
        console.log(this.salaryArray)
      })
    })
  }

}
