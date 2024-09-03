import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit{
  id: any;
  loginArray: any[]=[];
  employeeArray: any[]=[];
  constructor(private services:ServicesService,private route:ActivatedRoute,private router:Router){}
  employee = {
    name: '',
    mail: '',
    post: '',
    pay: '',
    id: '',
    password: '',
    
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{this.id=params.get('id')})
    this.services.getloginID(this.id).subscribe((response:any)=>{
      this.employeeArray = response
      console.log()
      this.employee={
        name: this.employeeArray[0].employee.employee_name,
        mail: this.employeeArray[0].employee.employee_mail,
        post: this.employeeArray[0].employee.post,
        pay: this.employeeArray[0].employee.base_package,
        id: this.employeeArray[0].username,
        password: this.employeeArray[0].password,
      }
      
    })
  }
  submit(){
    const employeeEditForm = new FormData()
    employeeEditForm.append('name',this.employee.name)
    employeeEditForm.append('mail',this.employee.mail)
    employeeEditForm.append('post',this.employee.post)
    employeeEditForm.append('pay',this.employee.pay)
    employeeEditForm.append('id',this.employee.id)
    employeeEditForm.append('password',this.employee.password)
    this.services.editEmployee(this.id,employeeEditForm).subscribe((response=>{
      alert("Employee Edit Success !!")
      this.router.navigate(['main/viewemployees'])
    }))
  }

}
