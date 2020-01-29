import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  padding: 20px;
  flex: 1;
`;

export const Content = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  max-height: 90%;
`;

export const Products = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  background: #fff;
  margin-bottom: 10px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Infos = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 25px;
`;

export const SubTotal = styled.View`
  background: #eee;
  height: 40px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const QuantityWrapper = styled.View`
  width: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 20px;
  border: 1px solid #ddd;
  background: #fff;
  width: 50px;
  height: 25px;
  margin: 0 5px;
  padding: 5px;
  border-radius: 4px;
`;

export const SubTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 18px;
  color: #ababab;
  margin-top: 10px;
  text-align: center;
`;

export const TotalPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  padding: 5px;
  height: 40px;
  border-radius: 4px;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
