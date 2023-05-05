import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ProfileComponent} from "./profile/profile.component";
import {ExerciseDetailsComponent} from "./exercise-details/exercise-details.component";
import {CreateExerciseComponent} from "./create-exercise/create-exercise.component";
import {UpdateExerciseComponent} from "./update-exercise/update-exercise.component";
import {AllExercisesComponent} from "./all-exercises/all-exercises.component";

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
    component:LoginComponent
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
    path: 'categories/:category_id',
    component: ExercisesComponent
  },
  {
    path:'categories/:category_id/:exercise_id',
    component:ExerciseDetailsComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "create",
    component: CreateExerciseComponent
  },
  {
    path: "update",
    component: AllExercisesComponent
  },
  {
    path: "update/:exercise_id",
    component: UpdateExerciseComponent
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
