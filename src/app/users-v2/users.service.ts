import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './store/users.state';

@Injectable()
export class UsersService {
  API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.API_ENDPOINT);
  }

  getUserById(id: number){
    return this.http.get(this.API_ENDPOINT + '/' + id);
  }

  updateUserById(user: IUser){
    return this.http.patch(this.API_ENDPOINT + '/' + user.id, {body: user});
  }

  addNewUser(user: IUser){
    return this.http.put(this.API_ENDPOINT + '/' + user.id, {body: user});
  }
}
