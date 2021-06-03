import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import http from "../api/http";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, token: action.payload, errorMessage: "" };
    case "signout":
      return { ...state, token: null, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("SignUp");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await http.post("/signup", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: "signin", payload: data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up process",
      });
    }
  };

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await http.post("/signin", { email, password });
      await AsyncStorage.setItem("token", data.token);
      dispatch({ type: "signin", payload: data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign in process",
      });
    }
  };

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow")
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "" }
);
