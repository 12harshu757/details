import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { ViewComponent } from './view/view.component';
import { EmpService } from './emp.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EmpdetailComponent,
    ViewComponent,
   
    routing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
