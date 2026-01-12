import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticaService {

  // URL base del backend desplegado
  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  constructor(private httpClient: HttpClient) {}

  // ==============================
  // VENTAS DE LA SEMANA
  // ==============================
  public ventasSemana(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.API_URL}/estadisticas/ventas-semana`
    );
  }

  // ==============================
  // PRODUCTO ESTRELLA POR FECHAS
  // ==============================
  public productoEstrella(
    inicio: string,
    fin: string
  ): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.API_URL}/estadisticas/producto-estrella`,
      {
        params: {
          inicio,
          fin
        }
      }
    );
  }
}
