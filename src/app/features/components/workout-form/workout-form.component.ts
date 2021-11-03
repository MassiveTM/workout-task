import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.sass']
})
export class WorkoutFormComponent implements OnInit {
  @Output() onNewElement: EventEmitter<string> = new EventEmitter<string>();
   // Gestione form
  // Gestione form
  public myFormValidator: FormGroup = new FormGroup({});
  
  public title: string = '';

  constructor() { 
    this.createForm();
  }

  ngOnInit(): void {
  }


    public addWorkout(){
      const val = this.myFormValidator.get('element')!.value;
  
      // Mettiamo in console il valore di element
      console.log('Valore element: ' + val);
  
      // Emetto il valore
      this.onNewElement.emit(val);
  
      // Pulisco valore
      this.myFormValidator.get('element')!.setValue('');
    }
  
    private createForm() {
      this.myFormValidator = new FormGroup(
        {element: new FormControl('', [Validators.required, Validators.minLength(5)])}
        );
    }

    
}
