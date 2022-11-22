import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyModule } from '../my-module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyModule,
  ],
  // providers: [
  //   {
  //     // provide: 'Test',
  //     // // userValue: 'Best,
  //     // useClass: class{},
  //     // useExisting
  //   }
  // ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
