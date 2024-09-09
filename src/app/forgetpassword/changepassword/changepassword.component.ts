import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit{
  employee_name: any;
  
  constructor(private services:ServicesService,private router:Router){}
  changepassword={
    password:'',
    retypePassword:''
  }
  ngOnInit(): void {
    const employeeID = sessionStorage.getItem('employeeID')
    this.services.getEmployee(employeeID).subscribe((response:any)=>{
      this.employee_name = response.employee_name
      console.log(this.employee_name)
    })
  }
  submitChangePassword(){
    const passwordForm = new FormData()
    const employeeID = sessionStorage.getItem('employeeID')
    passwordForm.append('password',this.changepassword.password)
    this.services.changePassword(passwordForm,employeeID).subscribe((response:any)=>{
      if(response.success === true){
        alert("Password Changed SuccessFully")
        this.router.navigate(['/login'])
      }
    })
  }

}
