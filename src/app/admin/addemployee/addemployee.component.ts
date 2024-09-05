import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit{
  errorMessage: any;
  constructor(private services:ServicesService){}
  employee = {
    name: '',
    mail: '',
    post: '',
    pay: '',
    id: '',
    password: '',
    repassword: ''
  };

  ngOnInit(): void {
    
  }
  submit(){
    if(this.employee.password !== this.employee.repassword){
      this.errorMessage = true
    }
    else{
      const employeeForm = new FormData()
      employeeForm.append('name',this.employee.name)
      employeeForm.append('mail',this.employee.mail)
      employeeForm.append('post',this.employee.post)
      employeeForm.append('pay',this.employee.pay)
      employeeForm.append('id',this.employee.id)
      employeeForm.append('password',this.employee.password)
      this.services.addEmployees(employeeForm).subscribe((response:any)=>{
        console.log(response)
        if (response.success === true){
          alert("Done")
          location.reload()
        }
        else if (response.Done === true){
          alert("ZooHR ID Already Exists")
        }
       
      })
    }
  }
}
