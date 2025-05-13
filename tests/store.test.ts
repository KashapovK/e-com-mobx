import { describe, it, beforeEach } from 'vitest';
import { expect } from 'chai';
import { Store } from '../src/store';
import type { CartItem, Product } from '../src/types';

describe('Store', () => {
  let store: Store;

  beforeEach(() => {
    store = new Store();
  });

  it('should set products', () => {
    const products: Product[] = [
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 200 },
    ];

    store.setProducts(products);

    expect(store.products).to.have.lengthOf(2);
    expect(store.products[0].name).to.equal('Product 1');
  });

  it('should add product to cart', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);

    expect(store.cart).to.have.lengthOf(1);
    expect(store.cart[0].quantity).to.equal(1);
  });

  it('should increase quantity if item already in cart', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);
    store.addToCart(item);

    expect(store.cart).to.have.lengthOf(1);
    expect(store.cart[0].quantity).to.equal(2);
  });

  it('should remove item from cart', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);
    store.removeFromCart('1');

    expect(store.cart).to.have.lengthOf(0);
  });

  it('should increase item quantity', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);
    store.increaseQuantity('1');

    expect(store.cart[0].quantity).to.equal(2);
  });

  it('should decrease item quantity', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);
    store.increaseQuantity('1');
    store.decreaseQuantity('1');

    expect(store.cart[0].quantity).to.equal(1);
  });

  it('should not decrease quantity below 1', () => {
    const item: CartItem = {
      id: '1',
      name: 'Product 1',
      price: 100,
      quantity: 1,
    };

    store.addToCart(item);
    store.decreaseQuantity('1');

    expect(store.cart[0].quantity).to.equal(1);
  });
});
