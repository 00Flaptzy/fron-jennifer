import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  private readonly tokenKey = 'token';

  constructor(private httpClient: HttpClient) {}

  // ==============================
  // LOGIN
  // ==============================
  public login(formData: any): Observable<any> {
    return this.httpClient.post(
      `${this.API_URL}/empleado/login`,
      formData
    );
  }

  // ==============================
  // TOKEN
  // ==============================
  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // ==============================
  // LOGOUT
  // ==============================
  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // ==============================
  // VERIFICAR SESIÓN
  // ==============================
  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
