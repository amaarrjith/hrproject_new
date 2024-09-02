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
