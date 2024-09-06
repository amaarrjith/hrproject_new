import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-contactadmin',
  templateUrl: './contactadmin.component.html',
  styleUrls: ['./contactadmin.component.scss']
})
export class ContactadminComponent implements OnInit{
  constructor(private services:ServicesService){}
  contact={
    subject:'',
    description:'',
    file:''
  }
  ngOnInit(): void {
    
  }
  submit(){

  }
  onFileChange(event:Event){
    
  }
}
