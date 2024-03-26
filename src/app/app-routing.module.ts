import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from 'src/app/pages/forget-password/forget-password.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LogoutComponent } from 'src/app/pages/logout/logout.component';
import { PageNotfoundComponent } from 'src/app/pages/page-notfound/page-notfound.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    //lazy loading for child loading
    path: "admin",
    loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: "**",
    component: PageNotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
