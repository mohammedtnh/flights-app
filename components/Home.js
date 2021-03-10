import { Text, View } from "native-base";
import React from "react";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";
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
  // ReloadInstructions

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
            <View>
              <ButtonStyled
                bordered
                success
                rounded
                large
                block
                iconLeft
                onPress={() => navigation.navigate("UserProfile")}
              >
                <ButtonIconStyled type="EvilIcons" name="user" />
                <ButtonTextStyled> UserProfile </ButtonTextStyled>
              </ButtonStyled>
              <Text> </Text>
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
            </View>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
