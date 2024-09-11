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
  submit() {
   
    if (!this.employee.name || !this.employee.mail || !this.employee.post || !this.employee.pay || !this.employee.id || !this.employee.password || !this.employee.repassword) {
      alert("Please fill in all fields.");
      return; 
    }
  
    
    if (this.employee.password !== this.employee.repassword) {
      this.errorMessage = true;
      return; 
    }
  
    const employeeForm = new FormData();
    employeeForm.append('name', this.employee.name);
    employeeForm.append('mail', this.employee.mail);
    employeeForm.append('post', this.employee.post);
    employeeForm.append('pay', this.employee.pay);
    employeeForm.append('id', this.employee.id);
    employeeForm.append('password', this.employee.password);
  
   
    this.services.addEmployees(employeeForm).subscribe((response: any) => {
      console.log(response);
      if (response.success) {
        alert("Employee added successfully.");
        location.reload()
      } else if (response.Done === true) {
        alert("ZooHR ID already exists.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    })
  }
  
}
