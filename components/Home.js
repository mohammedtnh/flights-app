import React from "react";

import { Text, View } from "native-base";

import { useDispatch, useSelector } from "react-redux";

// Actions
import { signout } from "../store/actions/authActions";

// Styling
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
  const flights = useSelector((state) => state.flightReducer.flights);
  // console.log(flights);
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
          <View>
            <ButtonStyled
              bordered
              success
              rounded
              large
              block
              iconLeft
              onPress={() => navigation.navigate("FlightList")}
            >
              <ButtonIconStyled
                type="MaterialCommunityIcons"
                name="airplane-takeoff"
              />
              <ButtonTextStyled> Flights </ButtonTextStyled>
            </ButtonStyled>
            <Text> </Text>
          </View>

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
