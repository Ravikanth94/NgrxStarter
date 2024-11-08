import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { StoreModule } from '@ngrx/store';
import { UsersEffects, UsersReducer } from './store';
import * as UsersReducerV2 from './store/users.reducers2';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { routes } from './users.route';
import { ReactiveFormsModule } from '@angular/forms';
import {AutoFocusDirective} from '../utiltites/auto-focus.directive';

@NgModule({
  declarations: [UsersComponent, AutoFocusDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //StoreModule.forFeature('UsersV2' , UsersReducer.reducer),
    StoreModule.forFeature('UsersV2' , UsersReducerV2.reducer),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [UsersService]
})
export class UsersModule { }
