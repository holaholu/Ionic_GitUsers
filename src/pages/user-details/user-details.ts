import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Github} from '../../providers/github';

import {User} from '../../models/User';
import {Repo} from '../../models/Repo';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  username:string;
  user:User;
  repos:Repo[];
  constructor(public github:Github,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.username = this.navParams.get('username');

    this.github.getUser(this.username).subscribe(user => {
      this.user = user;
    });

    this.github.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    });
  }

  userRepoClick(url){
    window.open(url, '_system', 'location=yes');
    return false;
  }

}
