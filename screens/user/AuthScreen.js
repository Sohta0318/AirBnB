import React from "react";
import { View, Text } from "react-native";

const AuthScreen = () => {
  return (
    <View>
      <Text>Welcome to Airbnb</Text>
      <View>
        {/* <Input
          id="email"
          label="E-Mail"
          keyboardType="email-address"
          required
          email
          autoCapitalize="none"
          errorText="Please enter a valid email address."
          initialValue=""
        />
        <Input
          id="password"
          label="Password"
          keyboardType="default"
          secureTextEntry
          required
          minLength={5}
          autoCapitalize="none"
          errorText="Please enter a valid password."
          initialValue=""
        /> */}
      </View>
    </View>
  );
};

export default AuthScreen;
