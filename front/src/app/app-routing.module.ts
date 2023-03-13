import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrarComponent} from './pages/registrar/registrar.component';
import {authGuard} from "./guard/authGuard.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'logout', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authGuard]
})
export class AppRoutingModule {
}
