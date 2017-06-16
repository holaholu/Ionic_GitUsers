import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {User} from '../models/User';
import {Repo} from '../models/Repo';

@Injectable()
export class Github {
  client_id: string;
  client_secret:string;
  constructor(public http: Http) {
    this.client_id = 'd9308aacf8b204d361fd';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
  }

  getUsers():Observable<User[]>{
    return this.http.get('https://api.github.com/users?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  searchUsers(searchText){
    return this.http.get('https://api.github.com/search/users?q='+searchText+'&client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getUser(username):Observable<User>{
    return this.http.get('https://api.github.com/users/'+username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(username):Observable<Repo[]>{
    return this.http.get('https://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

}
