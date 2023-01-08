import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellModule } from '../shell/shell.module';
import { RouterComponent } from './router.component';
import { LoginComponent } from '../login/login.component';
import { AmanitaComponent } from '../amanita/amanita.component';
import { LoginModule } from '../login/login.module';
import { UserModule } from '../user/user.module';
import { UserListComponent } from '../user/user-list/user-list.component';
import { AuthenticatedRouteGuard } from '../login/authenticated-route.guard';

@NgModule({
  imports: [
    CommonModule,
    ShellModule,
    LoginModule,
    UserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: RouterComponent,
        canActivate: [AuthenticatedRouteGuard],
        children: [
          {
            path: 'user',
            component: UserListComponent,
          },
          {
            path: '',
            redirectTo: 'user',
            pathMatch: 'full',
          },
          {
            path: 'amanita',
            component: AmanitaComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  declarations: [RouterComponent],
  exports: [RouterModule, RouterComponent],
  providers: [AuthenticatedRouteGuard],
})
export class AppRouterModule {}
