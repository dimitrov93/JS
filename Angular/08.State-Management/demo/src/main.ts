// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { state } from '@angular/animations';
import {
  BehaviorSubject,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  OperatorFunction,
  scan,
  Subject,
  switchMap,
} from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

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
  users: null,
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

  if (action.type === 'LOAD_USERS_SUCCESS') {
    return { ...acc, users: action.value };
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
  users: null | any[];
}

function getState(initialState: IState, reducer: any) {
  const state$$ = new BehaviorSubject<IState | null>(null);
  const action$$ = new Subject<any>();

  return {
    action$: action$$.asObservable(),
    state$: state$$.asObservable().pipe(
      filter((val) => !!val),
      scan(reducer, initialState)
    ),
    dispatch: (action: any) => {
      action$$.next(action);
      state$$.next(action);
    },
  };
}

const { state$, dispatch, action$ } = getState(initialState as any, reducer);
state$.subscribe(console.log);

function createSelector(
  state$: Observable<IState>,
  mapFn: (state: IState) => IState[keyof IState]
): Observable<IState[keyof IState]> {
  return state$.pipe(map(mapFn), distinctUntilChanged());
}

function createEffect(
  actions$: Observable<any>,
  actionType: string,
  op1: OperatorFunction<any, any>
) {
  actions$
    .pipe(
      filter((a) => a.type === actionType),
      op1
    )
    .subscribe((action) => {
      dispatch(action);
    });
}

const isLoadingUsers$ = merge(
  action$.pipe(
    filter(a => a.type === 'LOAD_USERS'),
    map(() => true)
  ),
  action$.pipe(
    filter(a => a.type === 'LOAD_USERS_SUCCESS'),
    map(() => false)
  ),
)

const arrSelector$ = createSelector(state$, (s) => s.arr);

dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

setTimeout(() => {
  dispatch({ type: 'EVENT_1', value: [1, 2, 3] });

  setTimeout(() => {
    dispatch({ type: 'EVENT_3', value: 1000 });
    dispatch({ type: 'LOAD_USERS' });
  }, 5000);
});

createEffect(
  action$,
  'LOAD_USERS',
  switchMap(() => [
    // { type: 'LOAD_USERS_SUCCESS', value: [{ name: 13 }, { name: 123 }] },
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => ({type: 'LOAD_USERS_SUCCESS', value: users}))
  ])
);

createSelector(state$, (s) => s.users).subscribe(console.log);
isLoadingUsers$.subscribe(console.log);