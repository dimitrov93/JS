import { Injectable, InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

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
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // useClass,
    // myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
