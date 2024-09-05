import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.scss']
})
export class UpdatepolicyComponent implements OnInit{
  monthstatusArray: any[]=[];
  yearstatusArray: any[]=[];
  constructor(private services:ServicesService,private router:Router){}
  leave = {
    casualyr: '',
    sickyr: '',
    halfyr: '',
    casualmonth: '',
    sickmonth: '',
    halfmonth: '',
  };
  ngOnInit(): void {
    this.services.viewleaveStatus().subscribe((response:any)=>{
      this.monthstatusArray = response.month
      this.yearstatusArray = response.year
      this.leave={
        casualyr: this.yearstatusArray[0].casual_leaves,
        sickyr: this.yearstatusArray[0].sick_leaves,
        halfyr: this.yearstatusArray[0].half_day_leaves,
        casualmonth: this.monthstatusArray[0].casual_leaves,
        sickmonth: this.monthstatusArray[0].sick_leaves,
        halfmonth: this.monthstatusArray[0].half_day_leaves,
      }
    })
  }
  submit(){
    const updatePolicy = new FormData()
    updatePolicy.append('casualyr',this.leave.casualyr)
    updatePolicy.append('sickyr',this.leave.sickyr)
    updatePolicy.append('halfyr',this.leave.halfyr)
    updatePolicy.append('casualmonth',this.leave.casualmonth)
    updatePolicy.append('sickmonth',this.leave.sickmonth)
    updatePolicy.append('halfmonth',this.leave.halfmonth)
    this.services.updatePolicy(updatePolicy).subscribe((response:any)=>{
      alert("Policy Updated")
      this.router.navigate(['/main/updateleave'])
    })
  }

}
