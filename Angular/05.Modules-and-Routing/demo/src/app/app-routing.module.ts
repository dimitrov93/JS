import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './post/list/list.component';
import { UserListComponent } from './user/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-list'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'post-list',
    component: ListComponent
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
