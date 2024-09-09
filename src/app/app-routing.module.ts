import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './admin/main/main.component';
import { IndexComponent } from './admin/index/index.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { AddbonusComponent } from './admin/addbonus/addbonus.component';
import { AddreductionComponent } from './admin/addreduction/addreduction.component';
import { SalaryMonthComponent } from './admin/salary-month/salary-month.component';
import { ViewemployeesComponent } from './admin/viewemployees/viewemployees.component';
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

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'main',component:MainComponent,children:[
    {path:'index',component:IndexComponent},
    {path:'addemployee',component:AddemployeeComponent},
    {path:'addbonus',component:AddbonusComponent},
    {path:'addreduction',component:AddreductionComponent},
    {path:'salarymonth',component:SalaryMonthComponent},
    {path:'viewemployees',component:ViewemployeesComponent},
    {path:'editemployees/:id',component:EditemployeeComponent},
    {path:'viewbonus',component:ViewbonusComponent},
    {path:'viewreduction',component:ViewreductionComponent},
    {path:'salary',component:SalaryComponent},
    {path:'viewleave',component:ViewleaveComponent},
    {path:'updateleave',component:UpdateleaveComponent},
    {path:'updatepolicy',component:UpdatepolicyComponent},
    {path:'viewsalary',component:ViewsalaryComponent}
  ]},
  {path:'employeemain',component:EmployeemainComponent,children:[
    {path:'employeeindex',component:EmployeeindexComponent},
    {path:'viewemployeeleave',component:ViewemployeeleaveComponent},
    {path:'leaverequest',component:LeaverequestComponent},
    {path:'employeesalary',component:EmployeesalaryComponent},
    {path:'employeeleavestatus',component:EmployeeleavestatusComponent},
    {path:'employeebonus',component:EmployeebonusComponent},
    {path:'employeereduction',component:EmployeereductionComponent},
    {path:'contactadmin',component:ContactadminComponent},
    {path:'empleavereduction',component:EmpleavereductionComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword/validation',component:ValidationComponent},
  {path:'forgetpassword/enterotp',component:EnterotpComponent},
  {path:'forgetpassword/changepassword',component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
