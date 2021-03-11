import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
// import { FlatList } from "react-native-gesture-handler";
import { ButtonIconStyled } from "../styles";

const FlightItem = ({ flight, setId }) => {
  return (
    <View>
      <Card>
        <Card.Title>Flight number: {flight.id}</Card.Title>
        <Card.Divider />
        <Text>{`Departure Airport: ${flight.departureAirport}`}</Text>
        <Text>{`Arrival Airport: ${flight.arrivalAirport}`}</Text>
        <Text>Departure Time: {flight.departureTime}</Text>
        <Text>Arrival Time: {flight.arrivalTime}</Text>
        <Text>Departure Date: {flight.departureDate}</Text>
        <Text>Arrival Date: {flight.arrivalDate}</Text>
        <Text>
          {/* style={{ marginBottom: 10 }}> */}
          Economy Seats: {flight.economySeats}
        </Text>
        <Text>Business Seats: {flight.businessSeats}</Text>
        <Button
          onPress={() => setId((array) => [...array, flight.id])} //onPress flight id will be saved
          icon={
            <ButtonIconStyled
              name="book-plus-multiple-outline"
              type="MaterialCommunityIcons"
              color="#ffffff"
            />
          }
          buttonStyle={{
            borderRadius: 100,
            marginLeft: 100,
            marginRight: 100,
            marginBottom: 0,
          }}
          //   title="BOOK"
        />
      </Card>
    </View>
  );
};

export default FlightItem;
