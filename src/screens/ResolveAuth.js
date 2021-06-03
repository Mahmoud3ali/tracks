import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default ResolveAuthScreen;
