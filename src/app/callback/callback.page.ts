import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.handleRedirectCallback().subscribe({
      next: () => {
        console.log('Successfully handled redirect callback');
      },
      error: (err) => {
        console.error('Error handling redirect callback', err);
      }
    });
  }
}
