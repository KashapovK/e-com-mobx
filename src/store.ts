import { makeAutoObservable } from 'mobx';
import { CartItem, Product } from './types';

class Store {
  products: Product[] = [];
  cart: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  addToCart(product: CartItem) {
    const existingItem = this.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(id: string) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  increaseQuantity(id: string) {
    const item = this.cart.find((item) => item.id === id);
    if (item) {
      item.quantity += 1;
    }
  }

  decreaseQuantity(id: string) {
    const item = this.cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  }
}

const store = new Store();
export default store;
