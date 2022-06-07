import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import { AddPlant } from "../firebase";

function RegisterPlant(props) {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Url, setUrl] = useState("");
  const [Description, setDescription] = useState("");
  const navigation = useNavigation();
  const handleAppPlant = () => {
    AddPlant(Name, Price, Url, Description);
    console.log("Plant added");
    navigation.navigate("MainScreen");
  };
  return (
    <Screen>
      <AppTextInput
        onChangeText={(text1) => setName(text1)}
        icon="email"
        placeholder="Name"
      />

      <AppTextInput
        onChangeText={(text2) => setPrice(text2)}
        icon="currency-usd"
        placeholder="Price"
        keyboardType="numeric"
      />
      <AppTextInput
        onChangeText={(text3) => setUrl(text3)}
        icon="link"
        placeholder="Link"
      />
      <AppTextInput
        onChangeText={(text4) => setDescription(text4)}
        icon="details"
        placeholder="Description"
      />

      <TouchableOpacity onPress={handleAppPlant} style={styles.button}>
        <Text style={styles.buttonText}>Add Plant</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default RegisterPlant;
