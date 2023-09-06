import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopHomeComponent } from './home/top-home/top-home.component';
import { BottomHomeComponent } from './home/bottom-home/bottom-home.component';
import { ChartsHomeComponent } from './home/charts-home/charts-home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home/bottomHome', pathMatch:'full'},
   {path:'home',component:HomeComponent, children:[
    {path:'',redirectTo:'/bottomHome', pathMatch:'full'},
    {path:'bottomHome',component:BottomHomeComponent},
    {path:'charts', component:ChartsHomeComponent}
   ]},

   {path:'topHome',component:TopHomeComponent},
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
