import { Component, Inject, Optional } from '@angular/core';
import { myCustomToken, useClass } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  users = [
    {
      name: "Ivan"
    },
    {
      name: 'Pesho'
    }
  ];

  constructor(    
    // @Inject('Test') test: String  
    // @Inject(useClass) test: useClass  --> 
    @Optional() @Inject(myCustomToken) test1: string,
    test: useClass
    ) {
    setInterval(() => {
      this.counter ++;
    },3000);

    console.log(test);
    
  }

  addUserHandler(nameInput: HTMLInputElement): void {
    const {value: name} = nameInput;
    // this.users.push({ name })
    this.users = this.users.concat({name})
    nameInput.value = '';
  }
}
