import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YashforgotPasswordComponent } from './components/yashforgot-password/yashforgot-password.component';
import { YashloginComponent } from './components/yashlogin/yashlogin.component';
import { YashnotFoundComponent } from './components/yashnot-found/yashnot-found.component';

const routes: Routes = [
  {path: 'login',component:YashloginComponent},
  {path:'forgot-password',component:YashforgotPasswordComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: YashnotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
