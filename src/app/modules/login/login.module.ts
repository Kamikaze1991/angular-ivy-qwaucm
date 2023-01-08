import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticatedRouteGuard } from './authenticated-route.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticatedRouteGuard],
})
export class LoginModule {}
