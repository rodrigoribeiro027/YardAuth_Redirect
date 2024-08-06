import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: string | undefined;
  hostUrl: string;

  constructor(public auth: AuthService) {
    this.hostUrl = window.location.origin; 
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.email = user?.email;
      console.log('user', user?.email);
      if (this.email) {
        setTimeout(() => {
          window.open(`${this.hostUrl}/check-email?email=${this.email}`, '_blank');
        }, 1000); 
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }
}
