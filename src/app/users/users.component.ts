import { Component, OnInit } from '@angular/core';
import { UserState, UsersActions, UsersSelector } from './store';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IUser } from './store/users.state';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users$ : Observable<UserState.IUser[]>;
  usersFormGroup: FormGroup;

  constructor(private store: Store<UserState.UserFeatureState>,private formBuilder: FormBuilder) {
    this.users$ = of([] as UserState.IUser[]);
    this.usersFormGroup = new FormGroup({});
    this.resetUserFormArray();
   }

   get userFormArray(){
    return this.usersFormGroup.get('users') as FormArray;
   }

   resetUserFormArray(){
    this.usersFormGroup = this.formBuilder.group({
      users: this.formBuilder.array([])
    })
   }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.InvokeUsersGetAPI());
    this.store.select(UsersSelector.featureSelectorKey).subscribe((state)=>{
     this.resetUserFormArray();
      state.list.forEach(user=>{
        const formGroup = this.formBuilder.group({
          id: [user.id,Validators.required],
          name: [user.name, Validators.required],
          username: [user.username,Validators.required],
          email: [user.email,Validators.required],
        });
        formGroup.disable();
        this.userFormArray.push(formGroup);
      })
    })
  }

  onEditClick(index: number){
    const formGroup = this.userFormArray.at(index) as FormGroup<{
      id: FormControl<number>;
      name: FormControl<string>;
      username: FormControl<string>;
      email: FormControl<string>;
    }>;
    Object.keys(formGroup.controls).forEach((key) => {
      if(key === "id"){
        formGroup.controls[key].disable();
      }
      else if(key === 'name' || key === 'username' || key === 'email'){
        formGroup.controls[key].enable();
      }
    })
  }

  saveUser(index: number){
    const formGroup = this.userFormArray.at(index);
    const user:IUser = formGroup.value;
    user.id = formGroup.get('id')?.value;
    this.store.dispatch(UsersActions.InvokeUpdateUserAPI({user}));
  }
}
