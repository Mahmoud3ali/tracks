import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { AuthForm, NavLink } from "../components";
import { Context as AuthContext } from "../context/authContext"; 

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In To Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signIn}
        submitButtonText="SIGN IN"
      />
      <NavLink
        text="Don't have an account? Sign up instead!"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignInScreen;
