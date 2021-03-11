import { Spinner, View, Text } from "native-base";
import React from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import FlightItem from "../FlightItem";
import { styles } from "./Styles";

const FlightList = () => {
  let [id, setId] = useState([]); //reading flight id for booking
  const flights = useSelector((state) => state.flightReducer.flights);
  const loading = useSelector((state) => state.flightReducer.loading);
  if (loading) return <Spinner />;

  const flightList = flights.map((flight) => (
    <FlightItem flight={flight} key={flight.id} setId={setId} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{flightList}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FlightList;
