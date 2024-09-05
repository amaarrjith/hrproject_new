import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit{
  requestArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.services.getallleaveRequests().subscribe((response:any)=>{
      this.requestArray = response
      console.log(this.requestArray)
    })
  }
  approve(id:any,leave_id:any){
    this.services.approveLeave(id,leave_id).subscribe((response:any)=>{
      alert("Leave Approved")
      location.reload()
    })
  }
  decline(id:any){
    this.services.declineLeave(id).subscribe((response:any)=>{
      alert("Leave Declined")
      location.reload()
    })
  }

}
