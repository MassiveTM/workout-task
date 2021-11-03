import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutComponent } from './features/containers/workout/workout.component';
import { WorkoutFormComponent } from './features/components/workout-form/workout-form.component';
import { WorkoutListComponent } from './features/components/workout-list/workout-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkoutExerciseListComponent } from './features/components/workout-exercise-list/workout-exercise-list.component';
import { WorkoutExerciseFormComponent } from './features/components/workout-exercise-form/workout-exercise-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutListComponent,
    WorkoutExerciseListComponent,
    WorkoutExerciseFormComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
