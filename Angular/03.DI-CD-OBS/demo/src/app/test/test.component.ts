import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {

  // @Input() set user(newValue: {name: string}[]) {
  //   console.log(newValue);
  // }

  
  @Input() user!: {name: string}[];

  constructor(private cdRef: ChangeDetectorRef) { 
    this.cdRef.detach()
  }

  ngOnChanges(): void {
    if (this.user.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges()
  }

}
