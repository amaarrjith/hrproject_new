import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit{
  day: any;
  month: any;
  year: any;
  constructor(private services:ServicesService){}
  employeeArray:any[]=[]
  attendance = {
    employee:'',
    date:''
  }
  ngOnInit(): void {
    this.services.getallEmployees().subscribe((response:any)=>{
      this.employeeArray = response

    })
  }
  submit(){
    const attendanceForm = new FormData()
    attendanceForm.append('employee',this.attendance.employee)
    attendanceForm.append('date',this.attendance.date)
    this.services.attendance(attendanceForm).subscribe((response:any)=>{
      alert("Employee Leave Marked")
    })
  }
  

}
