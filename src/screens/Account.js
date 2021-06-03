import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    margin: 20,
  },
});

export default AccountScreen;
