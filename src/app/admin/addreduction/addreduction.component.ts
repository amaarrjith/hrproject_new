import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-addreduction',
  templateUrl: './addreduction.component.html',
  styleUrls: ['./addreduction.component.scss']
})
export class AddreductionComponent implements OnInit{
  employeeArray: any[]=[];
  constructor(private services:ServicesService){}
  reduction = {
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
    const reductionForm = new FormData()
    reductionForm.append('employee',this.reduction.employee)
    reductionForm.append('amount',this.reduction.amount)
    reductionForm.append('reason',this.reduction.reason)
    this.services.addReduction(reductionForm).subscribe((response:any)=>{
      alert("Reduction To Employee Done !!")
    })
  }

}
