import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { auth } from "../firebase";

function Profile(props) {
  const navigation = useNavigation();
  const handleSignOut = () => {
    if (auth != null) {
    }
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));

    navigation.navigate("Login");
  };
  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={auth.currentUser?.email.split("@")}
          subTitle={auth.currentUser?.email}
          image={require("../assets/plant1.jpg")}
        />
      </View>

      <TouchableOpacity onPress={handleForgetPassword}>
        <View style={styles.forgetbutton}>
          <Text>Forget Password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignOut}>
        <View style={styles.SignOut}>
          <Text>SignOut</Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  forgetbutton: {
    backgroundColor: "#ffe66d",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  SignOut: {
    backgroundColor: colors.red,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Profile;
