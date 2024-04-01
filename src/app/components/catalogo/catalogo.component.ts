import { Component } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  constructor (private CartServicesService: CartServicesService){};

  addToCart(product: any) { 
    this.CartServicesService.addToCart(product)
    console.log( this.CartServicesService.getCart() )
  }

  products = [
    {
      name: 'Bike_1',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0
    }, 
    {
      name: 'Bike_2',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    },
    {
      name: 'Bike_3',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike_4',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    },
    {
      name: 'Bike_5',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    }, 
    {
      name: 'Bike',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    },
    {
      name: 'Bike_6',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    }, 
    {
      name: 'Bike_7',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    },
    {
      name: 'Bike_8',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    }, 
    {
      name: 'Bike_9',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      cantidad: 0    
    },
 ]
}
