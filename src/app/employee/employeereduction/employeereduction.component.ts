import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-employeereduction',
  templateUrl: './employeereduction.component.html',
  styleUrls: ['./employeereduction.component.scss']
})
export class EmployeereductionComponent implements OnInit{
  reductionArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const guestID = sessionStorage.getItem('guestID')
    this.services.viewemployeeReductions(guestID).subscribe((response:any)=>{
      this.reductionArray = response
      console.log(this.reductionArray)
    })
  }

}
