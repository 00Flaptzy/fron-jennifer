import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcompanamientoService {

  // 👉 URL de tu backend en Render
  private readonly apiUrl = 'https://jennifer-52td.onrender.com';

  constructor(private httpClient: HttpClient) {}

  // ==============================
  // TOPPINGS
  // ==============================
  getAllTopping(): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}/acompanamiento/topping`
    );
  }

  // ==============================
  // SALSAS
  // ==============================
  getAllSalsas(): Observable<any> {
    return this.httpClient.get(
      `${this.apiUrl}/acompanamiento/salsas`
    );
  }

  // ==============================
  // ACOMPAÑAMIENTO POR PRODUCTO
  // ==============================
  getByProducto(idProducto: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.apiUrl}/producto-acompanamiento/getbyproducto/${idProducto}`
    );
  }
}
