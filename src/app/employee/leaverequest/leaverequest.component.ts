import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit{
  employee = {
    reason:'',
    leaveDate:''
  }
  constructor(private services:ServicesService){}
  reasonArray:any[]=[]
  ngOnInit(): void {
    this.services.getallLeavetype().subscribe((response:any)=>{
      this.reasonArray = response
      console.log(this.reasonArray)
    })
  }
  submit(){
    const reasonForm = new FormData()
    const guestID = sessionStorage.getItem('guestID')
    reasonForm.append('date',this.employee.leaveDate)
    reasonForm.append('reason',this.employee.reason)
    this.services.addLeaverequest(reasonForm,guestID).subscribe((response:any)=>{
      alert("Leave Request Sent")
    })
  }
}
