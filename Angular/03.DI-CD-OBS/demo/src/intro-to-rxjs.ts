import {Observable, observable} from 'rxjs'

function getValue() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('TEST');
    }, 2000);
  });
}

function getValue2(cb: (...args: any[]) => void) {
  setTimeout(() => {
    cb('TEST');
  }, 2000);
}

// cps

getValue2(function (value) {
  console.log(value);
});

// promise chain
//  async
Promise.resolve(1)
  .then(function (value) {
    console.log(value);
  })
  .then()
  .then();

[1]
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * x;
  });

[1, 2, 3, 4]
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * x;
  });


