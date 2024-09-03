import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewreduction',
  templateUrl: './viewreduction.component.html',
  styleUrls: ['./viewreduction.component.scss']
})
export class ViewreductionComponent implements OnInit{
  reductionArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.services.getallReduction().subscribe((response:any)=>{
      this.reductionArray = response
      console.log(this.reductionArray)
    })
  }

}
