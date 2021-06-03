import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";

import { Map, TrackForm } from "../components";
import { Context as LocationContext } from "../context/locationContext";

import "../_mock_location";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused || state.recording, addLocation);

  return (
    <>
      <Map />
      {err ? <Text> Please enable location services </Text> : null}
      <TrackForm />
    </>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
