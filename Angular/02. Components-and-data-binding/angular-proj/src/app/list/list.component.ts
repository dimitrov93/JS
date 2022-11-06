import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // interpolation: ['[', ']'],
})
export class ListComponent {
  users: IUser[] = [
    {
      firstName: 'Ivan',
      lastName: 'Petrov',
    },
    {
      firstName: 'Petar',
      lastName: 'Ivanov',
    },
  ];

  showLastName = true;

  selectedUserIndex: null | number = null;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }
  constructor() {}

  handleClickEvent(event: MouseEvent) {
    console.log(event);

    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index
  }

  customEventHandler($event : ICustomEvent) {
    console.log($event);
    
  }
}
