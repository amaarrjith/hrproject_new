import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-contactadmin',
  templateUrl: './contactadmin.component.html',
  styleUrls: ['./contactadmin.component.scss']
})
export class ContactadminComponent implements OnInit{
  constructor(private services:ServicesService){}
  contact={
    subject:'',
    description:'',
    file:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    const employeeID = sessionStorage.getItem('guestID')
    const contactForm = new FormData()
    contactForm.append('subject',this.contact.subject)
    contactForm.append('description',this.contact.description)
    contactForm.append('file',this.contact.file)
    this.services.contactAdmin(contactForm,employeeID).subscribe((response:any)=>{
      alert("Sent Successfully")
    })
  }
  onFileChange(event:any){
    this.contact.file = event.target.files[0]
    console.log(this.contact.file)
  }
}
