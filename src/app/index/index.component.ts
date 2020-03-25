import { Component, OnInit } from '@angular/core';
import {USERS} from './../models/mock-users';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
  }
  users = USERS;

  editUser(user){
    this.userData.userToEdit(user);
  }

  deleteUser(index){
    this.userData.deleteUser(index);
  }
}
