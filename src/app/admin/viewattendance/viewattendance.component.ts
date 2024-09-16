import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.scss']
})
export class ViewattendanceComponent implements OnInit{
  attendanceArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
   this.services.viewallAttendance().subscribe((response:any)=>{
    this.attendanceArray = response
    console.log(this.attendanceArray)
   }) 
  }
  delete(id:any){
    this.services.deleteAttendance(id).subscribe((response:any)=>{
      alert("Attendance Deleted")
      location.reload()
    })
  }

}
