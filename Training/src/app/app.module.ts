import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YashloginComponent } from './components/yashlogin/yashlogin.component';
import { YashforgotPasswordComponent } from './components/yashforgot-password/yashforgot-password.component';
import { YashnotFoundComponent } from './components/yashnot-found/yashnot-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    YashloginComponent,
    YashforgotPasswordComponent,
    YashnotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
