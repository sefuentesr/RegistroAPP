import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.registerUser(this.username, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/home']); 
    } else {
      this.successMessage = '';
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
    }
  }
}





