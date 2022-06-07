import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { auth, getAPlantRecord } from "../firebase";
import Screen from "../components/Screen";
import axios from "axios";

function PlantDetails(props) {
  const navigation = useNavigation();
  const [Plants, setPlants] = useState([]);

  useEffect(() => {
    console.log("PROPS", props.route.params.data[0]);
    const getPlants = async () => {
      // let uri = props.route.params.data[0].base64;
      const dataall = await getAPlantRecord(props.route.params.data[0]);
      await setPlants(dataall); //props.route.params.data[0]
    };
    getPlants();
  }, []);

  return (
    <View>
      <Image style={styles.image} source={{ uri: Plants.Photo }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{Plants.Name}</AppText>
        <AppText style={styles.price}>${Plants.Price}</AppText>
        <ScrollView>
          <AppText style={styles.paragraph}>{Plants.Description}</AppText>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    // marginTop: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  paragraph: {
    margin: 10,
    textAlign: "justify",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default PlantDetails;
