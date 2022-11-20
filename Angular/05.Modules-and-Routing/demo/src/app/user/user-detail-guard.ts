import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.checkIfLogged(state.url) || this.router.createUrlTree(['/user/list'])
  }
  checkIfLogged(url: string): boolean {
    return false
  }
}
