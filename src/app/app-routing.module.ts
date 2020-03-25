import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
{
  path:'home',
  component:IndexComponent
},
{
  path:'step1',
  component:FirstComponent
},
{
  path:'step2',
  component:SecondComponent
},
{
  path:'**',
  component:ErrorComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
