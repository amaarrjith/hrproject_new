import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-employeeleavestatus',
  templateUrl: './employeeleavestatus.component.html',
  styleUrls: ['./employeeleavestatus.component.scss']
})
export class EmployeeleavestatusComponent implements OnInit{
  statusArray: any = {};
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const guestID = sessionStorage.getItem('guestID')
    this.services.remainLeave(guestID).subscribe((response:any)=>{
      this.statusArray = response
      console.log(this.statusArray)
    })
  }

}
