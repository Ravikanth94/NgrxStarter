import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './store/users.state';

@Injectable()
export class UsersService {
  api_endpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.api_endpoint);
  }

  getUserById(id: number){
    return this.http.get(this.api_endpoint + '/' + id);
  }

  updateUserById(user: IUser){
    return this.http.patch(this.api_endpoint + '/' + user.id, {body: user});
  }

  addNewUser(user: IUser){
    return this.http.put(this.api_endpoint + '/' + user.id, {body: user});
  }
}
