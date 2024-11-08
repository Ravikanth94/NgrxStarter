import { Component, inject, OnInit } from '@angular/core';
import { UserState, UsersActions, UsersSelector } from './store';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { IUser } from './store/users.state';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {selectUserIds, selectAllUsersSelector, selectCurrentUserId, getSelectedUserId} from './store/users.selector2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users$:Observable<UserState.IUser[]>;
  usersV2$:Observable<UserState.IUser[]>;
  isLoading: boolean;
  usersFormGroup: FormGroup;

  constructor(private store: Store<UserState.UserFeatureState>,private formBuilder: FormBuilder) {
    this.users$ = new Observable<UserState.IUser[]>();
    this.isLoading = true;
    this.usersFormGroup = this.formBuilder.group({
      users: this.formBuilder.array([])
    });
    //this.store.select(selectCurrentUserId).subscribe((res)=> console.log(res))
    this.store.select(selectUserIds).subscribe((res)=> console.log(res))
    this.usersV2$ = this.store.select(selectAllUsersSelector);
   }

   get userFormArray(){
    return this.usersFormGroup.get('users') as FormArray;
   }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.InvokeUsersGetAPI());
    this.users$ = this.store.select(UsersSelector.usersSelector);
    this.store.select(UsersSelector.usersListLoading).subscribe(res => this.isLoading = res);
  }

  saveUser(index: number){
    const formGroup = this.userFormArray.at(index) as FormGroup;
    const user:IUser = formGroup.value;
    user.id = formGroup.get('id')?.value;
    this.store.dispatch(UsersActions.InvokeUpdateUserAPI({user}));
    this.userFormArray.removeAt(index);
  }

  createFormGroupForUser(index:number,user: { id: any; name: any; username: any; email: any; }){
    const formGroup = this.formBuilder.group({
            id: [{value:user.id,disabled:true},Validators.required],
            name: [user.name, Validators.required],
            username: [user.username,Validators.required],
            email: [user.email,Validators.required],
          });
    this.userFormArray.insert(index,formGroup);
  }

  isFormGroupPresentForUser(index:number){
    if(this.userFormArray.length > index){
      return true;
    }
    return false;
  }

  getUserFormGroupAtIndex(index:number):any{
    return this.userFormArray.at(index);
  }

  trackByFn(index:number, user: { id: number; }):number{
    return user.id;
  }
}
