import { Injectable } from '@angular/core';

//interfaz para representar un producto
interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  imagen: string
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService  {

  // Array para almacenar los productos del carrito
  private cart:Product[] = [];

  constructor() { }

  //añadir al carrito
  addToCart(product:Product): void {
    this.cart.push(product);
  }

  //eliminar del carrito
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id != productId);
  }

  //consultar los productos en el carrito
  getCart(): Product[] {
    return this.cart;
  }

  //precio total por todos los productos agregados
  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total +product.price, 0);
  }

  //vaciar carrito 
  clearCart(): void {
    this.cart = [];
  }
}