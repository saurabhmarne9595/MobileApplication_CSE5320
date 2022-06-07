import React from "react";
import {
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { useNavigation } from "@react-navigation/core";
import AppText from "../components/AppText";
import { auth } from "../firebase";

function MainScreen(props) {
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
  const handleCamera = () => {
    navigation.navigate("Camera");
  };
  const handlePlantInfo = () => {
    navigation.navigate("ListingsScreen");
  };
  const handleRegisterPlant = () => {
    navigation.navigate("RegisterPlant");
  };
  const handleProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <Screen>
      <ScrollView>
        <View style={styles.centeralign}>
          <AppText style={styles.label}>Menu</AppText>
        </View>
        <View style={styles.fdcolumn}>
          <View style={styles.fdrow}>
            <TouchableOpacity onPress={handleCamera}>
              <Card
                title="Camera"
                subTitle="Find Plant      "
                image={require("../assets/camera.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlantInfo}>
              <Card
                title="Plant Info           "
                subTitle="Get Info"
                image={require("../assets/plant-icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.fdrow}>
            <TouchableOpacity onPress={handleRegisterPlant}>
              <Card
                title="RegisterPlant  "
                subTitle="Add Info"
                image={require("../assets/plant.jpg")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfile}>
              <Card
                title="Profile"
                subTitle="Account Section"
                image={require("../assets/profile.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Button title="Sign Out" onPress={handleSignOut} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  centeralign: { alignItems: "center" },
  fdcolumn: { flexDirection: "column" },
  fdrow: { flexDirection: "row", justifyContent: "space-evenly" },
  label: { fontSize: 40, fontWeight: "bold", marginBottom: 20 },
});

export default MainScreen;
