import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewemployeeleave',
  templateUrl: './viewemployeeleave.component.html',
  styleUrls: ['./viewemployeeleave.component.scss']
})
export class ViewemployeeleaveComponent implements OnInit{
  username: any;
  requestArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.username = sessionStorage.getItem('guestID')
    console.log(this.username)
    this.services.viewEmployeeleave(this.username).subscribe((response:any)=>{
      this.requestArray = response
      console.log(this.requestArray)
    })
  }

}
