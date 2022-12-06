// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { state } from '@angular/animations';
import { BehaviorSubject, distinctUntilChanged, filter, map, scan } from 'rxjs';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// const initialState = {
//   arr: null,
//   obj: undefined,
//   count: 0,
// };

const initialState = {
  arr: null,
  obj: undefined,
  count: 0,
};

function reducer(acc: any, action: any) {
  if (!acc) {
    acc = initialState;
  }
  if (action.type === 'EVENT_1') {
    return { ...acc, arr: action.value };
  }

  if (action.type === 'EVENT_2') {
    return { ...acc, obj: action.value };
  }

  if (action.type === 'EVENT_3') {
    return { ...acc, count: action.value };
  }
  return acc;
}

// const result = [
//   { type: 'EVENT_1', value: [1, 2, 3] },
//   { type: 'EVENT_2', value: { a: 1 } },
//   { type: 'EVENT_3', value: 3 },
// ].reduce(reducer, initialState);

interface IState {
  arr: number[] | null;
  obj: { test: number } | null;
  count: number;
}

function getState(initialState: IState, reducer: any) {
  const state$$ = new BehaviorSubject<IState | null>(null);
  return {
    state$: state$$.asObservable().pipe(
      filter((val) => !!val),
      scan(reducer, initialState)
    ),
    dispatch: (action: any) => {
      state$$.next(action);
    },
  };
}

const { state$, dispatch } = getState(initialState as any, reducer);
state$.subscribe(console.log);

state$.pipe(map((state) => state.count), distinctUntilChanged()).subscribe(console.log);

dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

setTimeout(() => {
  dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

  setTimeout(() => {
    dispatch({ type: 'EVENT_3', value: 1000 })
  }, 5000);
  
});
