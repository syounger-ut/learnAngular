import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {
  constructor(private usersService: UsersService) { }

  activeUsers(): number {
    return this.usersService.activeUsers.length;
  }

  inactiveUsers(): number {
    return this.usersService.inactiveUsers.length;
  }
}
