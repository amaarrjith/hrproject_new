import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.scss']
})
export class ViewemployeesComponent implements OnInit{
  employeeArray: any[]=[];
  constructor(private services:ServicesService,private router:Router){}
  ngOnInit(): void {
    this.services.getallEmployees().subscribe((response:any)=>{
      this.employeeArray = response
      console.log(this.employeeArray)
    })
  }
  delete(id:any){
    this.services.deleteEmployee(id).subscribe((response:any)=>{
      alert("Deleted")
      location.reload()
    })
  }

  edit(id:any){
    console.log(id)
    this.router.navigate(['main/editemployees',id])
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

}
