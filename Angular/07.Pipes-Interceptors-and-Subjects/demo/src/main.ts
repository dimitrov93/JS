import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  BehaviorSubject,
  map,
  observable,
  Observable,
  of,
  ReplaySubject,
  retry,
  Subject,
} from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Promise.resolve(1000)
// of(1000, 200, 300).pipe(

// )

// function interval(delay: number, count: number | null) {
//   let counter = 0;
//   return new Observable((observer) => {
//     const id = setInterval(() => {
//       if (count === counter) {
//         observer.complete();
//         return;
//       }
//       observer.next(counter++);
//     }, delay);

//     return () => {
//       clearInterval(id);
//     };
//   });
// }

// const sub = interval(1000, 5).subscribe({
//   next(value) {
//     console.log(value);
//   },
//   error(err) {
//     console.error(err);
//   },
//   complete() {
//     console.log('Observable completed');
//   },
// });

// setTimeout(() => {
//   sub.unsubscribe();
// }, 1000);

// const subj$$ = new Subject();

// const bSubject$$ = new BehaviorSubject(1);

// const rSubject$$ = new ReplaySubject(20);

// rSubject$$.next(100)

// rSubject$$.subscribe(console.log);

// rSubject$$.next(200)
// rSubject$$.next(300)
// rSubject$$.next(400)

// console.log('=====');
// rSubject$$.subscribe(console.log);


// setTimeout(() => {
// bSubject$$.subscribe(console.log);
// bSubject$$.next(100);
//   setTimeout(() => {
//     bSubject$$.subscribe(console.log)
//   }, 1000);
// }, 1000);

// subj$$.subscribe();

// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);

// subj$$.next(100);

// setTimeout(() => {
//   subj$$.next(200);
//   subj$$.subscribe(console.log);

//   setTimeout(() => {
//     subj$$.next(200);
//   }, 1000);
// }, 1000);

// const s$ = new Observable((observable) => {
//   observable.next(100);
//   observable.next(200);
//   observable.next(300);

//   observable.error(new Error('BAD ERROR!'))
// })

// // s$ => stream
// s$.pipe(
//   map((a: any) => a + 1)
// ).subscribe({
//   next(value) {
//     console.log(value);
//   },
//   error(err) {
//     console.error(err);

//   },
// })

// new Promise((res,rej) => {
//   setTimeout(() => {

//   }, 1000);
// })
