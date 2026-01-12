import { Injectable } from '@angular/core';

export interface CarritoItem {
  idProducto: number | string;
  nombre?: string;
  precioBase: number;
  salsas: any[];
  toppings: any[];
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  private items: CarritoItem[] = [];

  // ==============================
  // AGREGAR AL CARRITO
  // ==============================
  agregar(producto: Omit<CarritoItem, 'cantidad'>): void {

    const index = this.items.findIndex(
      p =>
        p.idProducto === producto.idProducto &&
        JSON.stringify(p.salsas) === JSON.stringify(producto.salsas) &&
        JSON.stringify(p.toppings) === JSON.stringify(producto.toppings)
    );

    if (index >= 0) {
      this.items[index].cantidad++;
    } else {
      this.items.push({
        ...producto,
        cantidad: 1
      });
    }
  }

  // ==============================
  // OBTENER ITEMS
  // ==============================
  obtenerItems(): CarritoItem[] {
    return this.items;
  }

  // ==============================
  // AUMENTAR / DISMINUIR
  // ==============================
  aumentar(index: number): void {
    this.items[index].cantidad++;
  }

  disminuir(index: number): void {
    if (this.items[index].cantidad > 1) {
      this.items[index].cantidad--;
    }
  }

  // ==============================
  // ELIMINAR ITEM
  // ==============================
  eliminar(index: number): void {
    this.items.splice(index, 1);
  }

  // ==============================
  // LIMPIAR CARRITO
  // ==============================
  limpiar(): void {
    this.items = [];
  }

  // ==============================
  // TOTAL
  // ==============================
  total(): number {
    return this.items.reduce(
      (sum, item) => sum + item.precioBase * item.cantidad,
      0
    );
  }
}
