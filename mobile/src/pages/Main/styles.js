import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.dark};
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Card = styled.View`
  width: 220px;
  height: 360px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  flex-direction: column;
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  margin-top: auto;
  background: ${colors.primary};
  height: 40px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const QuantityWrapper = styled.View`
  height: 50px;
  width: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Quantity = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  flex: 1;
`;
