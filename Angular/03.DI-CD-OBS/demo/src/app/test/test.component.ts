import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppComponent } from '../app.component';
import { myCustomToken } from '../app.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: []
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnChanges {
  // @Input() set user(newValue: {name: string}[]) {
  //   console.log(newValue);
  // }

  @Input() user!: { name: string }[];

  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector
    ) {
    this.cdRef.detach();
    const value = this.injector.get(myCustomToken, null)
    const appCmp = this.injector.get(AppComponent)
    console.log(value, appCmp);
    
  }

  ngOnChanges(): void {
    if (this.user.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }
}

// class Wallet {
//   constructor(private amount: number, private test: string) {

//   }
// }

// class Person {
//   constructor(private wallet: Wallet) {}
// }

// const w = new Wallet(200, 'das');
// const p = new Person(w)
