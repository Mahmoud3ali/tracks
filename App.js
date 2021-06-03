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
import ResolveAuthScreen from "./src/screens/ResolveAuth";

import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { Provider as TrackProvider } from "./src/context/trackContext";

import { FontAwesome } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetails: TrackDetailsScreen,
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const trackCreate = createStackNavigator({
  TrackCreate: TrackCreateScreen,
});

trackCreate.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const account = createStackNavigator({
  Account: AccountScreen,
});

account.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    trackCreate,
    account,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App ref={setNavigator} />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
