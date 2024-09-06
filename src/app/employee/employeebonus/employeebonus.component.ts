import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-employeebonus',
  templateUrl: './employeebonus.component.html',
  styleUrls: ['./employeebonus.component.scss']
})
export class EmployeebonusComponent implements OnInit{
  bonusArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const guestID = sessionStorage.getItem('guestID')
    this.services.viewemployeeBonus(guestID).subscribe((response:any)=>{
      this.bonusArray = response
    })
  }

}
