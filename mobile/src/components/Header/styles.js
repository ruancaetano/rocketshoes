import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  background: #141419;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BascketButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Counter = styled.Text`
  width: 18px;
  height: 18px;
  border-radius: 7px;
  font-size: 12px;
  background: ${colors.primary};
  color: #fff;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
`;
