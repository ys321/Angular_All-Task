import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YashforgotPasswordComponent } from './components/yashforgot-password/yashforgot-password.component';
import { YashloginComponent } from './components/yashlogin/yashlogin.component';
import { YashnotFoundComponent } from './components/yashnot-found/yashnot-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login',component:YashloginComponent},
  {path:'forgot-password',component:YashforgotPasswordComponent},
  // {path:'admin',loadChildren:()=> import('./yashmodules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'admin',
  canActivate:[AuthGuard],
  loadChildren:()=> import('./yashmodules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: YashnotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
