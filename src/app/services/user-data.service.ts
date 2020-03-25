import { Injectable } from '@angular/core';
import {User} from './../models/user';
import {USERS} from './../models/mock-users';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: User;
  users = USERS;
  counter = 3;

  constructor(private router: Router) { }

  userToEdit(user){
    this.user = user;
    
  }

  getUser(){
    return this.user;
  }

  deleteUser(index){
    this.users.splice(index,1);
  }

  AddStep1(data){

    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    this.user.zipCode = data.zipCode;
  }

  AddStep2(data){
    this.user.Movies = [];
    data.movies.forEach(e => {
      if(!this.user.Movies.some(x => x.name === e.name))
         this.user.Movies.push(e)      
        });
  }
  


  submitForm(){
    let index = this.users.findIndex((e) => e.firstName == this.user.firstName);
    if(index === -1){
      this.users.push(this.user);
    }
    else{
      this.users[index] = this.user;
    {
    this.router.navigate(['/home'])
  }

}
}
}