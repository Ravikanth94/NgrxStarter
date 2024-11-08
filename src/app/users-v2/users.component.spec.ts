import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { usersSelector } from '../users/store/users.selector';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let fb : FormBuilder;
  let store: MockStore;

  let mockUsersData : {
    users:[{
      id:1,
      name:'test',
      username:'usertest',
      email:'email'
    }],
    isLoading: false,
    error: ''
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports:[ReactiveFormsModule, StoreModule.forRoot({})],
      providers: [FormBuilder,provideMockStore({selectors:[{
        selector: 'UserSelector.usersSelector',
        value: mockUsersData
      }]})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
