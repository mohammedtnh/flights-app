import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import {
  HomeBackground,
  TopStyling,
  Title,
  ButtonStyled,
  OverLayContainer,
  BottomStyling,
  ButtonTextStyled,
  ButtonIconStyled,
} from "../styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <HomeBackground
      source={{
        uri: "https://wallpaperaccess.com/full/850488.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Flights App</Title>
        </TopStyling>
        <BottomStyling>
          {user && (
            <ButtonStyled
              bordered
              success
              rounded
              large
              block
              iconLeft
              onPress={() => dispatch(signout())}
            >
              <ButtonIconStyled type="Octicons" name="sign-out" />
              <ButtonTextStyled> Signout </ButtonTextStyled>
            </ButtonStyled>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
