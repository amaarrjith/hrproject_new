import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://127.0.0.1:8000/api/'
  constructor(private http:HttpClient) { }
  
  loginFunction(loginForm:FormData){
    return this.http.post(`${this.baseUrl}login`,loginForm)
  }
  addEmployees(employeeForm:FormData){
    return this.http.post(`${this.baseUrl}employees`,employeeForm)
  }
  getallEmployees(){
    return this.http.get(`${this.baseUrl}employees`)
  }
  deleteEmployee(id:any){
    return this.http.delete(`${this.baseUrl}employees/${id}`)
  }
  getEmployee(id:any){
    return this.http.get(`${this.baseUrl}employees/${id}`)
  }
  getloginID(id:any){
    return this.http.get(`${this.baseUrl}login/${id}`)
  }
  editEmployee(id:any,employeeEditForm:FormData){
    return this.http.post(`${this.baseUrl}employees/${id}`,employeeEditForm)
  }
  addBonus(bonusForm:FormData){
    return this.http.post(`${this.baseUrl}bonus`,bonusForm)
  }
  addReduction(reductionForm:FormData){
    return this.http.post(`${this.baseUrl}reduction`,reductionForm)
  }
  getallBonus(){
    return this.http.get(`${this.baseUrl}bonus`)
  }
  getallReduction(){
    return this.http.get(`${this.baseUrl}reduction`)
  }
  salary(){
    return this.http.get(`${this.baseUrl}salary`)
  }
  viewSalary(){
    return this.http.get(`${this.baseUrl}viewsalary`)
  }
  generateSalary(id:any){
    return this.http.get(`${this.baseUrl}generatesalary/${id}`)
  }
  generatesalaryAll(){
    return this.http.get(`${this.baseUrl}generatesalary`)
  }
  leaveRequests(leaveForm:FormData){
    return this.http.post(`${this.baseUrl}leaverequests`,leaveForm)
  }
  getallleaveRequests(){
    return this.http.get(`${this.baseUrl}leaverequests`)
  }
  approveLeave(id:any,leave_id:any){
    return this.http.get(`${this.baseUrl}approveleave/${id}/${leave_id}`)
  }
  declineLeave(id:any){
    return this.http.get(`${this.baseUrl}declineleave/${id}`)
  }
  viewleaveStatus(){
    return this.http.get(`${this.baseUrl}leavestatus`)
  }
  updatePolicy(updatePolicy:FormData){
    return this.http.post(`${this.baseUrl}leavestatus`,updatePolicy)
  }
  generateSalaryMonth(salarymonthForm:FormData){
    return this.http.post(`${this.baseUrl}generatesalarymonth`,salarymonthForm)
  }
}
