import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './admin/index/index.component';
import { MainComponent } from './admin/main/main.component';
import { AddbonusComponent } from './admin/addbonus/addbonus.component';
import { AddreductionComponent } from './admin/addreduction/addreduction.component';
import { SalaryMonthComponent } from './admin/salary-month/salary-month.component';
import { ViewemployeesComponent } from './admin/viewemployees/viewemployees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { EditemployeeComponent } from './admin/editemployee/editemployee.component';
import { ViewbonusComponent } from './admin/viewbonus/viewbonus.component';
import { ViewreductionComponent } from './admin/viewreduction/viewreduction.component';
import { SalaryComponent } from './admin/salary/salary.component';
import { ViewleaveComponent } from './admin/viewleave/viewleave.component';
import { UpdateleaveComponent } from './admin/updateleave/updateleave.component';
import { UpdatepolicyComponent } from './admin/updatepolicy/updatepolicy.component';
import { ViewsalaryComponent } from './admin/viewsalary/viewsalary.component';
import { EmployeemainComponent } from './employee/employeemain/employeemain.component';
import { EmployeeindexComponent } from './employee/employeeindex/employeeindex.component';
import { ViewemployeeleaveComponent } from './employee/viewemployeeleave/viewemployeeleave.component';
import { LeaverequestComponent } from './employee/leaverequest/leaverequest.component';
import { EmployeesalaryComponent } from './employee/employeesalary/employeesalary.component';
import { EmployeeleavestatusComponent } from './employee/employeeleavestatus/employeeleavestatus.component';
import { EmployeebonusComponent } from './employee/employeebonus/employeebonus.component';
import { EmployeereductionComponent } from './employee/employeereduction/employeereduction.component';
import { ContactadminComponent } from './employee/contactadmin/contactadmin.component';
import { EmpleavereductionComponent } from './employee/empleavereduction/empleavereduction.component';
import { ValidationComponent } from './forgetpassword/validation/validation.component';
import { EnterotpComponent } from './forgetpassword/enterotp/enterotp.component';
import { ChangepasswordComponent } from './forgetpassword/changepassword/changepassword.component';
import { ViewmessagesComponent } from './admin/viewmessages/viewmessages.component';
import { ViewmessagebyidComponent } from './admin/viewmessagebyid/viewmessagebyid.component';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    MainComponent,
    AddbonusComponent,
    AddreductionComponent,
    SalaryMonthComponent,
    ViewemployeesComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    ViewbonusComponent,
    ViewreductionComponent,
    SalaryComponent,
    ViewleaveComponent,
    UpdateleaveComponent,
    UpdatepolicyComponent,
    ViewsalaryComponent,
    EmployeemainComponent,
    EmployeeindexComponent,
    ViewemployeeleaveComponent,
    LeaverequestComponent,
    EmployeesalaryComponent,
    EmployeeleavestatusComponent,
    EmployeebonusComponent,
    EmployeereductionComponent,
    ContactadminComponent,
    EmpleavereductionComponent,
    ValidationComponent,
    EnterotpComponent,
    ChangepasswordComponent,
    ViewmessagesComponent,
    ViewmessagebyidComponent,
    AddpolicyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
