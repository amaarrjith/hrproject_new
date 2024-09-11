import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewmessagebyid',
  templateUrl: './viewmessagebyid.component.html',
  styleUrls: ['./viewmessagebyid.component.scss']
})
export class ViewmessagebyidComponent implements OnInit{
  id: any;
  messageArray: any[]=[];
  employee_name: any;
  constructor(private services:ServicesService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{this.id=params.get('id')})
    this.services.viewMessages(this.id).subscribe((response:any)=>{
      this.messageArray = response
      console.log(response)
    })
  }

}
