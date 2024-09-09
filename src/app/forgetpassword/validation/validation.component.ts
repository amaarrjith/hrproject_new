import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit{
  constructor(private services:ServicesService,private router:Router){}
  forgotPassword = {
    zoohrId:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    const forgetPassword = new FormData()
    forgetPassword.append('zoohrid',this.forgotPassword.zoohrId)
    this.services.forgetPassword(forgetPassword).subscribe((response:any)=>{
      const employeeID = response.employeeID
      sessionStorage.setItem('employeeID',employeeID)
      this.router.navigate(['forgetpassword/enterotp'])
    })
  }
  
}
