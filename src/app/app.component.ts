import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    gender: new FormControl('female'),
  });

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
