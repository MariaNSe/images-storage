import { Component } from '@angular/core';
import { AuthService } from './core/services/api-auth/api-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.setToken().then((r) => r);
  }
}
