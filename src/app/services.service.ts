import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://127.0.0.1:8000/api/'
  constructor(private http:HttpClient) { }
  
  loginFunction(loginForm:FormData){
    return this.http.post(`${this.baseUrl}login`,loginForm)
  }
}
