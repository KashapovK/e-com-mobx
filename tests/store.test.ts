import { describe, expect, beforeEach } from 'vitest';
import store from '../src/store';
import { CartItem } from '../src/types';

describe('Функционал стора', () => {
  beforeEach(() => {
    store.setProducts([]);
    store.cart = [];
  });

  test('cart/add добавляет товар в корзину', () => {
    const product: CartItem = {
      id: '1',
      name: 'Test Product',
      price: 100,
      quantity: 1,
    };
    store.addToCart(product);
    const item = store.cart.find((i) => i.id === product.id);
    expect(item).toBeDefined();
    expect(item?.quantity).toBe(1);
  });

  test('cart/increase увеличивает количество товара', () => {
    const product: CartItem = {
      id: '1',
      name: 'Test Product',
      price: 100,
      quantity: 1,
    };
    store.addToCart(product);
    store.increaseQuantity(product.id);
    const item = store.cart.find((i) => i.id === product.id);
    expect(item?.quantity).toBe(2);
  });
});
