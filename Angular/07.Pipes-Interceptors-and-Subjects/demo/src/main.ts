// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { map, observable, Observable, of, Subject } from 'rxjs';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// Promise.resolve(1000)
// of(1000, 200, 300).pipe(

// )

function interval(delay: number) {
  let counter = 0;
  return new Observable((observer) => {
    const id = setInterval(() => {
      observer.next(counter++);
    }, delay);

    return () => {
      clearInterval(id);
    };
  });
}

const sub = interval(1000).subscribe(console.log);

setTimeout(() => {
  sub.unsubscribe();
}, 1000);

const subj$$ = new Subject();

subj$$.subscribe(console.log);
subj$$.subscribe(console.log);
subj$$.subscribe(console.log);

subj$$.next(100);

setTimeout(() => {
  subj$$.next(200);

  subj$$.subscribe(console.log);

  setTimeout(() => {
    subj$$.next(200);
  }, 1000);
}, 1000);

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
