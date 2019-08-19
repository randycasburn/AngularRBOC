import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemUserService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'Admin',
        lastName: 'Administrator',
        role: 'admin',
        token: 'qwer'
      },      {
        id: 2,
        username: 'user',
        password: 'user',
        firstName: 'User',
        lastName: 'User Person',
        role: 'user',
        token: 'asdf'
      }

    ];
    return {users};
  }
}
