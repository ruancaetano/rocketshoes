import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as ActionsCart from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import {
  Button,
  ButtonText,
  Card,
  Container,
  Image,
  List,
  Description,
  Price,
  Quantity,
  QuantityWrapper,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((accumulator, product) => {
      accumulator[product.id] = product.amount;
      return accumulator;
    }, {})
  );

  async function loadProducts() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleOnAddProduct(productId) {
    dispatch(ActionsCart.addToCartRequest(productId));
  }

  return (
    <Container>
      <List>
        {products.map(product => (
          <Card key={product.id}>
            <Image source={{ uri: product.image }} />
            <Description>{product.title}</Description>
            <Price>{product.formattedPrice}</Price>
            <Button onPress={() => handleOnAddProduct(product.id)}>
              <QuantityWrapper>
                <Icon name="add-shopping-cart" size={20} color="#FFF" />
                <Quantity>{amount[product.id] || 0}</Quantity>
              </QuantityWrapper>

              <ButtonText>ADICIONAR</ButtonText>
            </Button>
          </Card>
        ))}
      </List>
    </Container>
  );
}
