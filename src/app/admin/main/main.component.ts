import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  countArray: any={};
  constructor(private router:Router,private services:ServicesService){}
  ngOnInit(): void {
    const adminID = sessionStorage.getItem('adminID')
    if (!adminID){
      this.router.navigate([''])
    }
    this.services.checkPolicy().subscribe((response:any)=>{
      console.log(response)
      if (response.success === true){
        this.router.navigate(['/addpolicy'])
      }
    })

    this.services.checkMonth().subscribe((response:any)=>{
      console.log(response)
    })

    this.services.checkStatus().subscribe((response:any)=>{
      console.log(response)
    })
    
    this.services.getCount().subscribe((response:any)=>{
      this.countArray = response
    })

    this.services.checkLeavetype().subscribe((response:any)=>{
      console.log(response)
    })
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate([''])
  }

}
