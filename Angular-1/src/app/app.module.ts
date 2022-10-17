import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  yashEmployeeComponent } from './yashemployee/yashemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    yashEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path:'employee',
      component:yashEmployeeComponent,
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
