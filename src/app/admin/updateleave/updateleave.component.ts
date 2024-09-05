import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-updateleave',
  templateUrl: './updateleave.component.html',
  styleUrls: ['./updateleave.component.scss']
})
export class UpdateleaveComponent implements OnInit{
  monthstatusArray: any[]=[];
  yearstatusArray:any[]=[];
  constructor(private services:ServicesService,private router:Router){}
  ngOnInit(): void {
    this.services.viewleaveStatus().subscribe((response:any)=>{
      this.monthstatusArray = response.month
      this.yearstatusArray = response.year
    })
  }
  update(){
    this.router.navigate(['/main/updatepolicy'])
  }
}
