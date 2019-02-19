import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectOverview } from './project-overview/project-overview.component'

const routes: Routes = [
  {path:'projects', component:ProjectOverview},
  {path:'', pathMatch:'full', redirectTo:'projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
