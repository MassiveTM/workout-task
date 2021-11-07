import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutExerciseFormComponent } from './components/workout-exercise-form/workout-exercise-form.component';
import { WorkoutExerciseListComponent } from './components/workout-exercise-list/workout-exercise-list.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { ServiceModule } from './services/service.module';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutComponent } from './containers/workout/workout.component';
@NgModule({
  declarations: [
    WorkoutComponent,
    WorkoutListComponent,
    WorkoutFormComponent,
    WorkoutExerciseListComponent,
    WorkoutExerciseFormComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ServiceModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutFormComponent,
    WorkoutExerciseListComponent,
    WorkoutExerciseFormComponent,
    WorkoutComponent
  ] 
})
export class FeaturesModule { }
