import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import Screen from "../components/Screen";
function Test(props) {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //     setUsers(data.docs);
  //   };
  //   getUsers();
  // }, []);
  const navigation = useNavigation();
  const sample = () => {
    navigation.navigate("RegisterPlant");
  };
  return (
    <Screen>
      <TouchableOpacity
        onPress={sample}
        style={{ marginTop: 20, justifyContent: "center" }}
      >
        <Button title="Test1"></Button>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 25,
  },
});

export default Test;
