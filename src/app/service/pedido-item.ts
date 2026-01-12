import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PedidoItemService {

  private readonly API_URL =
    'https://jennifer-52td.onrender.com';

  constructor(private httpClient: HttpClient) {}

  public insert(idPedido: string, formData: any): Observable<any> {
    return this.httpClient.post(
      `${this.API_URL}/pedidoItem/insert/${idPedido}`,
      formData
    );
  }
}

