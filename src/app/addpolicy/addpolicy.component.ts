import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.scss']
})
export class AddpolicyComponent implements OnInit{
  constructor(private services:ServicesService,private router:Router){}
  leave = {
    casualyr:'',
    sickyr:'',
    halfyr:'',
    casualmonth:'',
    sickmonth:'',
    halfmonth:''

  }
  ngOnInit(): void {
    
  }
  submit(){
    if (!this.leave.casualyr || !this.leave.sickyr || !this.leave.halfyr || !this.leave.casualmonth || !this.leave.sickmonth || !this.leave.halfmonth ){
      alert("Enter All Values To Continue")
    }
    const policyForm = new FormData()
    policyForm.append('casualyr',this.leave.casualyr)
    policyForm.append('sickyr',this.leave.sickyr)
    policyForm.append('halfyr',this.leave.halfyr)
    policyForm.append('casualmonth',this.leave.casualmonth)
    policyForm.append('sickmonth',this.leave.sickmonth)
    policyForm.append('halfmonth',this.leave.halfmonth)
    this.services.createPolicy(policyForm).subscribe((response:any)=>{
      alert('Policy Added')
      this.router.navigate(['/main/index'])
    })
  }

}
