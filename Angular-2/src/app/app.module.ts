import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomDirective } from './custom.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YashChildComponent } from './yash-child/yash-child.component';
import { YashParentComponent } from './yash-parent/yash-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    YashChildComponent,
    YashParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
