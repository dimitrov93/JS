import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // interpolation: ['[', ']'],

})
export class ListComponent {

  users = [
    {
      firstName: 'Ivan',
      lastName: 'Petrov'
    },
    {
      firstName: 'Petar',
      lastName: 'Ivanov'
    }
  ];
  
  showLastName = true;

  
  handleClickEvent(event: MouseEvent) {
    console.log(event);
    
    this.showLastName = !this.showLastName
    
  }
  constructor() { 

  }

}
