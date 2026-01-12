import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  // URL base del backend desplegado
  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  constructor(private httpClient: HttpClient) {}

  // ==============================
  // OBTENER PRODUCTOS POR CATEGORÍA
  // ==============================
  public getAll(idCategoria: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.API_URL}/producto/categoria/${idCategoria}`
    );
  }
}
