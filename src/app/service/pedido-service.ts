import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PedidoService {

  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  constructor(private http: HttpClient) {}

  insert(formData: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/pedido/insert`,
      formData
    );
  }

  cambioEstado(idPedido: string, estado: string): Observable<any> {
    return this.http.put(
      `${this.API_URL}/pedido/estado/${idPedido}`,
      { estado }
    );
  }

  getEstadoPedido(idPedido: string): Observable<string> {
    return this.http.get(
      `${this.API_URL}/pedido/estado/${idPedido}`,
      { responseType: 'text' }
    );
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.API_URL}/pedido/getall`
    );
  }

  getDetallePedido(idPedido: string): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}/pedido/detalle/${idPedido}`
    );
  }
}
