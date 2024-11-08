import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { StoreModule } from '@ngrx/store';
import { UsersEffects, UsersReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { routes } from './users.route';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('Users' , UsersReducer.reducer),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild(routes)
  ],
  providers: [UsersService]
})
export class UsersModule { }
