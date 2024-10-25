import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.registerUser(this.username, this.password).subscribe(
      (response) => {
        this.successMessage = 'Usuario registrado con éxito.';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) => {
        this.successMessage = '';
        this.errorMessage = 'Error al registrar el usuario. Asegúrate de que el nombre de usuario no esté en uso.';
      }
    );
  }
}

