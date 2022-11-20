import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';




@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Test // {provide: Test, useClass: Test}
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { 
  static forRoot(config: any): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'test',
          useValue: config,
          multi: true
        }
      ]
    }
  }

  static forChild(config: any): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'some additional providers',
          useValue: config,
          multi: true

        }
      ]
    }
  }
}
