import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }
}
