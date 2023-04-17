import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:categoryId',
    component: ExercisesComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
