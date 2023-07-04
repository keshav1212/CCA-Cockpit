import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { BillableFresherComponent } from './billable-fresher/billable-fresher.component';
import { FresherPyramidComponent } from './fresher-pyramid/fresher-pyramid.component';
import { TrioComponent } from './trio/trio.component';
import { AttritionComponent } from './attrition/attrition.component';
import { AwsComponent } from './aws/aws.component';
import { RotationComponent } from './rotation/rotation.component';
import { Main1Component } from './main1/main1.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { CircularGaugeAllModule} from '@syncfusion/ej2-angular-circulargauge';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CardComponent } from './card/card.component';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidenavComponent,
    DashboardComponent,
    LogoutComponent,
    HeaderComponent,
    MainComponent,
    DataTableComponent,
    Dashboard1Component,
    BillableFresherComponent,
    FresherPyramidComponent,
    AttritionComponent,
    TrioComponent,
    AwsComponent,
    RotationComponent,
    Main1Component,
    ScorecardComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPassComponent,
    ResetPasswordComponent,
    
    CardComponent,
    
   

    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    CircularGaugeAllModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    CircularGaugeModule,
    MatNativeDateModule,
    MatDatepickerModule,
    Ng2SearchPipeModule
    // MatInputModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatTableModule

    // AngularFontAwesomeModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    
  }

}
