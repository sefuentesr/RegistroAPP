import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registeredUsers: { username: string; password: string }[] = [];
  private isAuthenticated = false;
  private currentUser: string = '';
  private apiUrl = 'http://tu-api-url.com/api/users';

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string): boolean {
    const userExists = this.registeredUsers.some(user => user.username === username);
    if (!userExists) {
      this.registeredUsers.push({ username, password });
      return true; 
    }
    return false; 
  }

  authenticate(username: string, password: string): boolean {
    const user = this.registeredUsers.find(user => user.username === username && user.password === password);
    return user !== undefined;
  }

  login(username: string, password: string): boolean {
    const user = this.registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true; 
    }
    return false; 
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = '';
  }


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }


  getCurrentUser(): string {
    return this.currentUser;
  }


  resetPassword(username: string): boolean {
    const userExists = this.registeredUsers.some(user => user.username === username);
    if (userExists) {
      console.log(`Se envió una solicitud para restablecer la contraseña del usuario: ${username}`);
      return true; 
    }
    return false; 
  }
}
