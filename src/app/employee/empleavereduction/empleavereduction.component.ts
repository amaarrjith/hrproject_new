import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-empleavereduction',
  templateUrl: './empleavereduction.component.html',
  styleUrls: ['./empleavereduction.component.scss']
})
export class EmpleavereductionComponent implements OnInit{
  reductionArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    const guestID = sessionStorage.getItem('guestID')
    this.services.getLeavereductionsbyID(guestID).subscribe((response:any)=>{
      this.reductionArray = response
      console.log(this.reductionArray)
    })
  }
  view(id:any){

  }

}
