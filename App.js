import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { setNavigator } from "./src/navigationRef";

import AccountScreen from "./src/screens/Account";
import SignInScreen from "./src/screens/Signin";
import SignupScreen from "./src/screens/Signup";
import TrackCreateScreen from "./src/screens/TrackCreate";
import TrackDetailsScreen from "./src/screens/TrackDetails";
import TrackListScreen from "./src/screens/TrackList";

import { Provider as AuthProvider } from "./src/context/authContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen,
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={setNavigator} />
    </AuthProvider>
  );
};
