import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  // URL base del backend en Render
  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  constructor(private httpClient: HttpClient) {}

  // ==============================
  // OBTENER TODAS LAS CATEGORÍAS
  // ==============================
  public getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.API_URL}/categoria/getall`
    );
  }
}
