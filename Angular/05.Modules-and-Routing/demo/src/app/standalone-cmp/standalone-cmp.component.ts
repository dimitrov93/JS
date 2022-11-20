import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-standalone-cmp',
  templateUrl: './standalone-cmp.component.html',
  styleUrls: ['./standalone-cmp.component.scss']
})
export class StandaloneCmpComponent  {

  @Input() showValue = false;

}
