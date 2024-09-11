import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewmessages',
  templateUrl: './viewmessages.component.html',
  styleUrls: ['./viewmessages.component.scss']
})
export class ViewmessagesComponent implements OnInit{
  constructor(private services:ServicesService,private router:Router){}
  messageArray: any[]=[];
  ngOnInit(): void {
    this.services.viewAdminMessages().subscribe((response:any)=>{
      this.messageArray = response
      console.log(this.messageArray)
    })
    
  }

  view(id:any){
    this.router.navigate(['/main/viewmessagebyid',id=id])
    }

  delete(id:any){
    console.log(id)
    this.services.deleteMessages(id).subscribe((response:any)=>{
      alert("Message Deleted")
      location.reload()
    })
  }

}
