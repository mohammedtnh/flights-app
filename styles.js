import styled from "styled-components/native";
import { Button, Icon, Input } from "native-base";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(51, 102, 204, 0.5);
`;

export const TopStyling = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;
  font-size: 38px;
  text-align: center;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled(Button)`
  background-color: rgba(12, 221, 166, 0.5);
  margin-left: 50px;
  margin-right: 50px;
`;

export const ButtonTextStyled = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const ButtonIconStyled = styled(Icon)`
  font-size: 20px;
  color: #fff;
`;

export const StyledTextInput = styled(Input)`
  width: 60%;
  height: 10%;
  margin: 10px 5px;
  border-color: gray;
  border-width: 1px;
`;
