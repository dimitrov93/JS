import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';
import { UserService } from './user.service';

function add(a: number | string, b: number | string): number | string {
  return (a) as any + (b) as any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  user$ = this.userService.users$
  isLoadingUsers$ = this.userService.isLoading$

  constructor(private userService: UserService) { }


  reloadUsers(): void {
    this.userService.loadUsers()
  }

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe({
  //     next: (users) => console.log(users),
  //     error: (err) => console.error(err),
  //   })
  // }
  title = 'demo';

  obj = {
    scores: [1,2,3,4,5,6]
  };
  add = add

  private scores: number[] = [];
  private result = 0;

  $time = interval(1000).pipe(
    startWith(null),
    map(() => new Date())
  )


  myPromise = new Promise((res) => {
    setTimeout(() => {
      res('Hello!')
    }, 5000);
  })

  calcScores(obj: { scores: number[] }) {
    if (this.scores !== obj.scores) {
      this.result = obj.scores.reduce((acc,curr) => acc + curr)
      this.scores = obj.scores
      return this.result
    }
    return this.result
  }


  addProp() {
    (this.obj as any)['test'] = 500;
    this.obj.scores = this.obj.scores.concat(100)
  }
}
