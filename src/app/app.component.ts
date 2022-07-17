import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('female'),
  });

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
