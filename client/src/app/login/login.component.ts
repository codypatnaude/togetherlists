import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showRegistration = false;
  constructor(public userService: UserService) { }

  ngOnInit() { }

  showRegistrationForm() {
    this.showRegistration = true;
  }

  createUser(form) {
    console.log('creating user');
    this.userService.createUser(form.value)
    .subscribe(
      (data) => {
        console.log('done!');
      }
    );

  }
  
}
