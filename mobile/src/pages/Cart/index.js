import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as ActionsCart from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';
import {
  Button,
  ButtonText,
  Container,
  Content,
  DeleteButton,
  Description,
  Infos,
  Image,
  Item,
  Product,
  Price,
  Products,
  SubTotal,
  SubTotalPrice,
  QuantityWrapper,
  Input,
  Total,
  TotalPrice,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.amount * currentProduct.price;
      }, 0)
    )
  );

  function handleDescreseAmount(product) {
    dispatch(ActionsCart.updateAmountRequest(product.id, product.amount - 1));
  }

  function handleIncreaseAmount(product) {
    dispatch(ActionsCart.updateAmountRequest(product.id, product.amount + 1));
  }

  function handleDelete(productId) {
    dispatch(ActionsCart.removeFromCart(productId));
  }

  return (
    <Container>
      <Content>
        <Products>
          {cart.map(product => (
            <Item key={product.id}>
              <Product>
                <Image source={{ uri: product.image }} />
                <Infos>
                  <Description>{product.title}</Description>
                  <Price>{product.formattedPrice}</Price>
                </Infos>
                <DeleteButton onPress={() => handleDelete(product.id)}>
                  <Icon name="delete" size={25} color={colors.primary} />
                </DeleteButton>
              </Product>
              <SubTotal>
                <QuantityWrapper>
                  <TouchableOpacity
                    onPress={() => handleDescreseAmount(product)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                  <Input editabled={false} value={String(product.amount)} />
                  <TouchableOpacity
                    onPress={() => handleIncreaseAmount(product)}
                  >
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                </QuantityWrapper>
                <SubTotalPrice>{product.subTotal}</SubTotalPrice>
              </SubTotal>
            </Item>
          ))}
        </Products>

        {/* TOTAL */}
        <Total>TOTAL</Total>
        <TotalPrice>{total}</TotalPrice>

        <Button>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
