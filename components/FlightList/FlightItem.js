import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
// import { FlatList } from "react-native-gesture-handler";
import { ButtonIconStyled } from "../../styles";
import { styles } from "./Styles";
import { useSelector } from "react-redux";

const FlightItem = ({ flight, setId }) => {
  const arrivalAirportId = flight.arrivalAirportId;
  const departureAirporId = flight.departureAirportId;

  const airports = useSelector((state) => state.airportReducer.airports);

  //finding the arrivalAirport for this flight
  const arrivalAirport = airports.find(
    (airport) => airport.id === arrivalAirportId
  );

  //finding the departureAirport for this flight
  const departureAirport = airports.find(
    (airport) => airport.id === departureAirporId
  );
  return (
    // Review: remove commented code
    // Review: Move some styles to the styles file
    <View>
      <Card>
        <Card.Title>Flight number: {flight.id}</Card.Title>
        <Card.Divider />
        <Text
          style={styles.text}
        >{`Departure Airport: ${departureAirport.code}`}</Text>
        <Text
          style={styles.text}
        >{`Arrival Airport: ${arrivalAirport.code}`}</Text>
        <Text style={styles.text}>Departure Time: {flight.departureTime}</Text>
        <Text style={styles.text}>Arrival Time: {flight.arrivalTime}</Text>
        <Text style={styles.text}>Departure Date: {flight.departureDate}</Text>
        <Text style={styles.text}>Arrival Date: {flight.arrivalDate}</Text>
        <Text style={styles.text}>
          {/* style={{ marginBottom: 10 }}> */}
          Economy Seats: {flight.economySeats}
        </Text>
        <Text style={styles.text}>Business Seats: {flight.businessSeats}</Text>
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
