import { render, screen, waitFor } from '@testing-library/react';
import { expect } from 'chai';
import App from '../src/app';
import store from '../src/store';

describe('App Component', () => {
  it('рендерит карточки продуктов после загрузки продуктов', async () => {
    store.setProducts([
      { id: '1', name: 'Test Product', price: 100 },
      { id: '2', name: 'Another Product', price: 200 },
    ]);

    render(<App />);

    assert.exists(screen.getByText(/Интернет-магазин/i));

    await waitFor(() => {
      const buttons = screen.queryAllByText(/Добавить в корзину/i);
      expect(buttons.length).to.be.greaterThan(0);
    });
  });
});
