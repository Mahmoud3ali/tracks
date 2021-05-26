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
    default:
      return state;
  }
};

const signUp = (dispatch) => async ({ email, password }) => {
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

const signIn = (dispatch) => {
  return ({ email, password }) => {};
};

const signOut = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { token: null, errorMessage: "" }
);
