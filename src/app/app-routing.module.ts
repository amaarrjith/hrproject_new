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
    {path:'salary',component:SalaryComponent}
  ]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
