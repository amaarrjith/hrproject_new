import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private services:ServicesService,private router:Router){}
  login = {
    username:'',
    password:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    const userID = document.getElementById('userid') as HTMLInputElement
    const passID = document.getElementById('passid') as HTMLInputElement
    if (this.login.username === ''){
      userID.placeholder = 'Enter Username To Proceed'
      userID.classList.add('error')
    }
    
    if(this.login.password === ''){
      passID.placeholder = 'Enter Password To Proceed'
      passID.classList.add('error')
    }
    const loginForm = new FormData()
    loginForm.append('username',this.login.username)
    loginForm.append('password',this.login.password)
    this.services.loginFunction(loginForm).subscribe((response:any)=>{
      if(response.admin === true){
        sessionStorage.setItem('adminID',this.login.username)
        this.router.navigate(['/main/index'])
      }
      if(response.success === true){
        sessionStorage.setItem('guestID',this.login.username)
        this.router.navigate([''])
      }
    })
  }
}
