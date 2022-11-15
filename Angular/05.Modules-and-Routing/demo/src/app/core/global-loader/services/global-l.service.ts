import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLService {

  title: string | null = 'Hello';


  showLoader(title: string): void {
    this.title = title;
  }

  hideLoader() {
    this.title = null;
  }

  constructor() { }
}
