import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotPassword from "./screens/ForgotPassword";
import MainScreen from "./screens/MainScreen";
import ListingsScreen from "./screens//ListingsScreen";
import PlantDetails from "./screens/PlantDetails";
import RegisterPlant from "./screens/RegisterPlant";
import PlantImageInfo from "./screens/PlantImageInfo";
import Profile from "./screens/Profile";
import Cam from "./screens/Cam";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgetPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainScreen"
          component={MainScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="ListingsScreen"
          component={ListingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PlantDetails"
          component={PlantDetails}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="RegisterPlant"
          component={RegisterPlant}
        /> 
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        /> 

        <Stack.Screen
          // options={{ headerShown: false }}
          name="Camera"
          component={Cam}
        />

         <Stack.Screen
          // options={{ headerShown: false }}
          name="PlantImageInfo"
          component={PlantImageInfo}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
