import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

type CanActivateReturnType =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;

@Injectable()
export class AuthenticatedRouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CanActivateReturnType {
    const authenticated = !!localStorage.access_token;
    if (!authenticated) {
      return this.router.parseUrl('/login');
    }
    return true;
  }
}
