import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CardActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

export default function Home() {
  const amount = useSelector(state =>
    state.cart.reduce((accumulator, product) => {
      accumulator[product.id] = product.amount;
      return accumulator;
    }, {})
  );

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleOnSelectProduct(id) {
    dispatch(CardActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            onClick={() => handleOnSelectProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
