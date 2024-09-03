import { HttpClient } from '@angular/common/http';
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
  
}
