import React, { useState } from "react";
import moment from "moment";
// Review: Remove unused imports and arrange them
import { Switch } from "react-native-switch";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  // Switch,
} from "react-native";
import { ListItem, Left, Right, Radio } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import NumericInput from "react-native-numeric-input";

// Styling
import Input from "./Form/Input";
import Button from "./Form/Button";
import { Label } from "native-base";

// Actions
import { searchFlight } from "../store/actions/flightActions";

const Search = ({ navigation }) => {
  // Review: Remove unused code
  const [departureAirport, setDepartureAirport] = useState(1);
  const [arrivalAirport, setArrivalAirport] = useState(2);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [seatType, setseatType] = useState("Economy");
  const [passengers, setpassengers] = useState(1);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  let data = {
    departureAirportId: +departureAirport,
    arrivalAirportId: +arrivalAirport,
    departureDate: moment(departureDate).format("YYYY-MM-DD"),
  };

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onArrChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setArrivalDate(currentDate);
  };

  const onDepChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDepartureDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const airports = useSelector(
    (state) => state.airportReducer.airports
  ).map((airport) => ({ label: airport.code, value: airport.id }));

  const dispatch = useDispatch();

  const handleSubmit = () => {
    //Checking seatType and adding it to data object
    if (seatType === "Business") {
      data = { ...data, businessSeats: +passengers };
    } else {
      data = { ...data, economySeats: +passengers };
    }
    //Checking of the flight is oneWay or a roundTrip
    if (isEnabled) {
      data = { ...data, arrivalDate: moment(arrivalDate).format("YYYY-MM-DD") };
    }

    dispatch(searchFlight(data, navigation));
  };

  return (
    <View>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        disabled={false}
        activeText={"Round Trip"}
        inActiveText={"One Way"}
        backgroundActive={"green"}
        backgroundInactive={"gray"}
        circleActiveColor={"#30a566"}
        circleInActiveColor={"#000000"}
        circleBorderWidth={6}
        switchWidthMultiplier={4}
      />

      <Label>Departure Airport</Label>
      <RNPickerSelect
        value={departureAirport}
        style={pickerSelectStyles}
        onValueChange={(value) => setDepartureAirport(value)}
        items={airports}
      />

      <Label>Arrival Airport</Label>
      <RNPickerSelect
        value={arrivalAirport}
        style={pickerSelectStyles}
        onValueChange={(value) => setArrivalAirport(value)}
        items={airports}
      />

      <Label>Departure Date</Label>
      <DateTimePicker
        testID="dateTimePicker"
        value={departureDate}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onDepChange}
      />

      {isEnabled && (
        <>
          <Label>Arrival Date</Label>
          <DateTimePicker
            testID="dateTimePicker"
            value={arrivalDate}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onArrChange}
          />
        </>
      )}

      <Label>Seat Type</Label>
      <RNPickerSelect
        value={seatType}
        style={pickerSelectStyles}
        onValueChange={(value) => setseatType(value)}
        items={[
          { label: "Economy", value: "Economy" },
          { label: "Business", value: "Business" },
        ]}
      />

      <Label>Passengers</Label>
      <NumericInput
        rounded
        value={passengers}
        onChange={setpassengers}
        totalHeight={30}
        totalWidth={60}
      />

      <Button onPress={handleSubmit} label="Search" />
    </View>
  );
};

export default Search;

// Review: move to styles
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
