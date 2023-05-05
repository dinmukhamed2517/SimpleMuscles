import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ProfileComponent } from './profile/profile.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "../AuthInterceptor";
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { UpdateExerciseComponent } from './update-exercise/update-exercise.component';
import { AllExercisesComponent } from './all-exercises/all-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ExercisesComponent,
    ProfileComponent,
    ExerciseDetailsComponent,
    CreateExerciseComponent,
    UpdateExerciseComponent,
    AllExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
