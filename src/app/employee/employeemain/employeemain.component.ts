import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeemain',
  templateUrl: './employeemain.component.html',
  styleUrls: ['./employeemain.component.scss']
})
export class EmployeemainComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    const guestID = sessionStorage.getItem('guestID')
    if (!guestID){
      this.router.navigate([''])
    }
  }
  logout(){
    sessionStorage.clear()
    this.router.navigate([''])
  }

}
