import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: Iuser[] = [];

  constructor(private _userService: UserService) {}

  public name = '';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.findAll().subscribe((data) => (this.users = data));
  }
}
