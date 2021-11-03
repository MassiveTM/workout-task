import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Workout } from '../models/workout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

    // Recupero la lista dei workout
    getAllWorkout(): Observable<Workout[]> {
      return this.http.get<Workout[]>(this.apiUrl + '/workouts');
    }

    // Recupero singolo workout
    getWorkout(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.apiUrl}/workouts/${id}`);
    }
  
    createWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(`${this.apiUrl}/workouts`, JSON.stringify(workout), this.httpOptions);
    }

    updateWorkout(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(`${this.apiUrl}/workouts/${workout.id}`, JSON.stringify(workout), this.httpOptions);
    }
    
    deleteWorkout(workout: Workout) {
      return this.http.delete(this.apiUrl + '/workouts/' + workout.id);
    }
}
