import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BreakefastComponent } from './breakefast/breakefast.component';
import { HistoryComponent } from './history/history.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { DrinksComponent } from './drinks/drinks.component';
import { BurgersComponent } from './burgers/burgers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path : 'home' , component: HomeComponent },
  {path : 'login' , component: LoginComponent },
  {path:'breakefast', component: BreakefastComponent},
  {path:'history', component: HistoryComponent},
  {path:'profile', component:HistoryComponent},
  {path:'trackorder', component: TrackorderComponent},

  {path:'drinks', component: DrinksComponent},
    {path: 'burgers', component: BurgersComponent},

  {path:'register', component: RegisterComponent},
  

    
//to make default home page
{path:'', redirectTo: 'home', pathMatch:'full'}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
