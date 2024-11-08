import { Component, OnInit } from '@angular/core';
import { IAppState, ITab } from './app-store/app.state';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { AppSelector } from './app-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  tabs$: Observable<ITab[]>;
  
  constructor(private store: Store<IAppState>, private router: Router){
    this.tabs$ = this.store.select(AppSelector.tabsSelector);
  }

  ngOnInit(): void {
    //this.store.subscribe(val => console.log(val));
  }

  navigateTo(tab: ITab){
    this.router.navigate(['/'+tab.url]);
  }

  keydownHandler(event:KeyboardEvent, tab:ITab){
    if(event.key === 'Enter'){
      this.navigateTo(tab);
    }
  }
}
