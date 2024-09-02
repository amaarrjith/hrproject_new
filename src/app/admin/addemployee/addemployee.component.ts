import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit{
  constructor(private services:ServicesService){}
  employee={
    name:'',
    mail:'',
    post:'',
    pay:'',
    id:'',
    password:'',
    repassword:''

  }
  ngOnInit(): void {
    
  }
  submit(){
    
  }
}
