import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Observable, map } from "rxjs";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// function interval(intervalValue: number = 0) {
//   return new Observable<number>(observer => {
//     let counter = 0;
//     const timerId = setInterval(() => {
//       observer.next(counter++)
//     },intervalValue);

//     return () => {
//       clearInterval(timerId)
//     }
//   })
// }

// const stream$ = interval(5000).pipe(
//   map(x => x + 1),
//   map(x => x + 1),
//   map(x => x + 1),
// );

// setTimeout(() => {
//   const sub = stream$.subscribe({
//     next: (x) => console.log(x),
//     error: (err) => console.log(err),
//     complete: () => console.log('Observable completed')
//   });

//   setInterval(() => {
//     sub.unsubscribe()
//   },1000)
// }, 3000);