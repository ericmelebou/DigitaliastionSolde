import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }
  isLogged(): boolean {
    return !!localStorage.getItem('token')
  }

  clearToken() : void {
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  clearTokenExpired(): void{
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }
}
