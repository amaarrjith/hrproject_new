import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.component.html',
  styleUrls: ['./enterotp.component.scss']
})
export class EnterotpComponent implements OnInit{
  otpValidation = {
    otp:''
  }
  constructor(private services:ServicesService,private router:Router){}
 
  ngOnInit(): void {
    
  }
  submitOtpValidation(){
    if (this.otpValidation.otp === ""){
      alert ("Enter OTP To Proceed")
    }
    else{
      const employeeID = sessionStorage.getItem('employeeID')
      const otpForm = new FormData()
      otpForm.append('otp',this.otpValidation.otp)
      this.services.submitOtp(otpForm,employeeID).subscribe((response:any)=>{
        console.log(response)
        if (response.success === true){
          alert("OTP Validation Success")
          this.router.navigate([''])
        }
        else if (response.fail === true){
          alert("Invalid OTP,Try Again")
        }
      })
    }
  }
  back(){
    sessionStorage.clear()
  }

}
