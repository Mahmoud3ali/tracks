import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { AuthForm, NavLink } from "../components";
import { Context as AuthContext } from "../context/authContext";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for tracker'
        errorMessage={state.errorMessage}
        submitButtonText='SIGN UP'
        onSubmit={signUp}
      />
      <NavLink
        routeName='SignIn'
        text='Already have an account? Sign in instead'
      />
    </View>
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignUpScreen;
