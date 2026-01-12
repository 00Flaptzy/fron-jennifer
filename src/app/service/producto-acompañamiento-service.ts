import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoAcompanamientoService {

  // URL base del backend en Render
  private readonly API_URL =
    'https://jennifer-52td.onrender.com/producto-acompanamiento';

  constructor(private http: HttpClient) {}

  // ==============================
  // OBTENER ACOMPAÑAMIENTOS POR PRODUCTO
  // ==============================
  getByProducto(idProducto: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.API_URL}/getbyproducto/${idProducto}`
    );
  }
}
