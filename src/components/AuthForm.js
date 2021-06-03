import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h4 style={styles.centerText}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer />
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        label='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        label='Password'
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage !== "" && (
        <Spacer>
          <Text h5 style={[styles.centerText, styles.error]}>
            {errorMessage}
          </Text>
        </Spacer>
      )}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  centerText: {
    alignSelf: "center",
  },
  error: {
    color: "red",
  },
});

export default AuthForm;
