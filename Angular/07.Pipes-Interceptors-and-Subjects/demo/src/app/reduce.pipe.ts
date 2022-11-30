import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: false // true is default
})
export class ReducePipe<T, I> implements PipeTransform {

  transform(array: T[], reduceFn: (acc: any, curr: T) => any, initialValue: I): unknown {
    if (initialValue !== undefined) {
     return array?.reduce(reduceFn, initialValue );
    }
    return array?.reduce(reduceFn);
  }

}
