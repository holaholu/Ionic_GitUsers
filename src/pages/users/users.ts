import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Github} from '../../providers/github';
import {UserDetailsPage} from '../user-details/user-details';

import {User} from '../../models/User';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  searchText:string;
  constructor(public github:Github,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.github.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  searchUsers(){
    this.github.searchUsers(this.searchText).subscribe(res => {
      this.users = res.items;
    });
  }

  userDetailsClick(username){
    this.navCtrl.push(UserDetailsPage, {username:username});
  }

}
