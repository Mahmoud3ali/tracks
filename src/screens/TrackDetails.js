import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/trackContext";

const TrackDetailsScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackContext);

  const track = state.find((item) => item._id === _id);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}> {track.name} </Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...track.locations[0].coords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((l) => l.coords)} />
      </MapView>
    </SafeAreaView>
  );
};

TrackDetailsScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailsScreen;
