import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DataTableComponent } from './data-table/data-table.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { BillableFresherComponent } from './billable-fresher/billable-fresher.component';
import { FresherPyramidComponent } from './fresher-pyramid/fresher-pyramid.component';
import { AttritionComponent } from './attrition/attrition.component';
import { TrioComponent } from './trio/trio.component';
import { AwsComponent } from './aws/aws.component';
import { RotationComponent } from './rotation/rotation.component';
import { Main1Component } from './main1/main1.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  
  {path:'dashboard',component:DashboardComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'logout',component:LogoutComponent},
  {path:'header',component:HeaderComponent},
  {path:'main',component:MainComponent},
  {path:'data-table',component:DataTableComponent},
  {path:'dashboard1',component:Dashboard1Component},
  {path:'billable-fresher',component:BillableFresherComponent},
  {path:'attrition',component:AttritionComponent},
  {path:'trio',component:TrioComponent},
  {path:'aws',component:AwsComponent},
  {path:'rotation',component:RotationComponent},
  {path:'main1',component:Main1Component},
  {path:'fresher-pyramid',component:FresherPyramidComponent},
  {path:'scorecard',component:ScorecardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'card',component:CardComponent},
  {path:'**',component:LoginComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashboardComponent, SidenavComponent, LogoutComponent, HeaderComponent, MainComponent,DataTableComponent, Dashboard1Component,
   BillableFresherComponent, AttritionComponent,TrioComponent, AwsComponent, RotationComponent, Main1Component, FresherPyramidComponent,
   LoginComponent, ScorecardComponent ,RegisterComponent, LoginComponent, ResetPasswordComponent,CardComponent]