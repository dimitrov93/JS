import { Injectable, InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class useClass {
  constructor() {
    console.log('Nameless call was constructed');
  }
}

export const myCustomToken = new InjectionToken('Test')

// const myProvider: Provider = {
//   // useValue: 123,
//   // provide: 'Test'
//   useClass: useClass,
//   // provide: useClass,

//   provide: myCustomToken
// };

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService
    // useClass,
    // myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
