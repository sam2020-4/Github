import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceService } from './Git-service/service.service';
import { Github } from './github';
import {RepositoriesComponent} from './repositories/repositories.component';
import { GitDetailsComponent } from './git-details/git-details.component';


const routes: Routes = [
  { path: 'profiles', component: GitDetailsComponent},
  { path: 'repos', component: RepositoriesComponent},
  { path: '', redirectTo:"/profiles", pathMatch:"full"},
  { path:'**', component:GitDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
