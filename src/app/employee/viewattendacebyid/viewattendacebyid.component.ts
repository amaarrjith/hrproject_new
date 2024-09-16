import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewattendacebyid',
  templateUrl: './viewattendacebyid.component.html',
  styleUrls: ['./viewattendacebyid.component.scss']
})
export class ViewattendacebyidComponent implements OnInit{
  attendanceArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const employeeID = sessionStorage.getItem('guestID')
    this.services.viewAttendancebyId(employeeID).subscribe((response:any)=>{
      this.attendanceArray = response
      console.log(this.attendanceArray)
    })
  }
  report(id:any){
    this.services.reportAttendance(id).subscribe((response:any)=>{
      alert("Reported To Admin")
    })
  }

}
