import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsersService } from '../users.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-store';
import { IAppState } from '../../app-store/app.state';
import { IUser } from './users.state';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store<IAppState>
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.InvokeUsersGetAPI),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(
          map(
            (users: any) => UsersActions.GetUsersAPISuccess({ list: users as IUser[], isLoading: false, error: '' }),
            catchError((error:Error) =>
              of(UsersActions.GetUsersAPIFailure({ list: [] as IUser[], isLoading: false, error: error.message }))
            )
          )
        );
      })
    );
  });

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.InvokeGetUserByIdAPI),
      mergeMap((props) => {
        return this.usersService.getUserById(props.id).pipe(
          map(
            (user: any) => UsersActions.GetUserByIdAPISuccess({ user: user as IUser, isLoading: false, error:'' }),
            catchError((error:Error) =>
              of(UsersActions.GetUserByIdAPIFailure({ user: {} as IUser, isLoading: false, error:error.message}))
            )
          )
        );
      })
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.InvokeUpdateUserAPI),
      mergeMap((props) => {
        return this.usersService.updateUserById(props.user).pipe(
          map(
            (user: any) => UsersActions.UpdateUserByIdSuccess({ user: props.user as IUser, isLoading: false, error:'' }),
            catchError((error: Error) =>
              of(UsersActions.UpdateUserByIdFailure({ user: {} as IUser, isLoading: false, error: error.message}))
            )
          )
        );
      })
    );
  });

  addNewUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.InvokeAddUserAPI),
      mergeMap((props) => {
        return this.usersService.addNewUser(props.user).pipe(
          map(
            (user: any) => UsersActions.AddNewUserSuccess({ user: props.user as IUser, isLoading: false, error: ''}),
            catchError((error) =>
              of(UsersActions.AddNewUserFailure({ user: {} as IUser, isLoading: false, error: error.message}))
            )
          )
        );
      })
    );
  });
}
