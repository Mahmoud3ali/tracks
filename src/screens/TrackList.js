import React, { useContext } from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/trackContext";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetails", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name}></ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
