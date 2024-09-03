import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-viewbonus',
  templateUrl: './viewbonus.component.html',
  styleUrls: ['./viewbonus.component.scss']
})
export class ViewbonusComponent implements OnInit{
  bonusArray: any[]=[];
  constructor(private services:ServicesService){}
  ngOnInit(): void {
    this.services.getallBonus().subscribe((response:any)=>{
      this.bonusArray = response
      console.log(this.bonusArray)
    })
  }

}
