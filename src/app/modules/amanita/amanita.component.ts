import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amanita',
  templateUrl: './amanita.component.html',
  styleUrls: ['./amanita.component.scss'],
})
export class AmanitaComponent {
  constructor(private router: Router) {}

  login() {
    localStorage.access_token = 'true';
    this.router.navigateByUrl('/');
  }
}
