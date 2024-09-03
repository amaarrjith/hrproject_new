import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-addbonus',
  templateUrl: './addbonus.component.html',
  styleUrls: ['./addbonus.component.scss']
})
export class AddbonusComponent implements OnInit{
  employeeArray: any[]=[];
  constructor(private services:ServicesService){}
  bonus={
    employee:'',
    amount:'',
    reason:''
  }
  ngOnInit(): void {
    this.services.getallEmployees().subscribe((response:any)=>{
      this.employeeArray = response
    })
  }

  submit(){
    const bonusForm = new FormData()
    bonusForm.append('employee',this.bonus.employee)
    bonusForm.append('amount',this.bonus.amount)
    bonusForm.append('reason',this.bonus.reason)
    this.services.addBonus(bonusForm).subscribe((response:any)=>{
      alert("Bonus Added To Employee")
    })

    
  }

}
