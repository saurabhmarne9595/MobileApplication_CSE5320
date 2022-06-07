import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import withFirebaseHOC from "../firebase";

const handleResetPass = () => {
  console.log("here");
};

class ForgotPassword extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.position}>
          <AppTextInput icon="email" onplaceholder="Enter Email Address">
            Email
          </AppTextInput>
          <TouchableOpacity onPress={handleResetPass} style={styles.button}>
            <Text style={styles.buttonText}>Send Reset Email</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  position: {
    marginTop: 20,
  },
});

// export default withFirebaseHOC(ForgotPassword);
export default ForgotPassword;
