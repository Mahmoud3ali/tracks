import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate("TrackDetails");
        }}
      />
      <Text style={{ fontSize: 48 }}> TrackListScreen </Text>
    </>
  );
};  

const styles = StyleSheet.create({});

export default TrackListScreen;
