import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  employeeArray: any[]=[];
  messageArray: any[]=[];
  countArray: any = {};
  constructor(private services:ServicesService,private router:Router){}
  ngOnInit(): void {
    this.services.getallEmployees().subscribe((response:any)=>{
      this.employeeArray = response
      console.log(this.employeeArray)
    })

    this.services.viewAdminMessages().subscribe((response:any)=>{
      this.messageArray = response
      console.log(this.messageArray)
    })

    this.services.getCount().subscribe((response:any)=>{
      this.countArray = response
    })
  }

  block(id:any){
    this.services.blockEmployee(id).subscribe((response:any)=>{
      alert("Employee Blocked")
      location.reload()
    })
  }

  unblock(id:any){
    this.services.unblockEmployee(id).subscribe((response:any)=>{
      alert("Employee Unblocked")
      location.reload()
    })
  }

  view(id:any){
    this.router.navigate(['/main/viewmessagebyid',id=id])
    }

  delete(id:any){
    console.log(id)
    this.services.deleteMessages(id).subscribe((response:any)=>{
      alert("Message Deleted")
      location.reload()
    })
  }

}
