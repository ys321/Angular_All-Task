import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YashloginComponent } from './components/yashlogin/yashlogin.component';
import { YashforgotPasswordComponent } from './components/yashforgot-password/yashforgot-password.component';
import { YashnotFoundComponent } from './components/yashnot-found/yashnot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    YashloginComponent,
    YashforgotPasswordComponent,
    YashnotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
