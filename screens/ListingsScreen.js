import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { getAllPlantRecords } from "../firebase";

const listings = [
  {
    id: 1,
    title: "Plant1",
    price: 100,
    image: require("../assets/plant1.jpg"),
  },
  {
    id: 2,
    title: "Plant2",
    price: 200,
    image: require("../assets/plant2.jpg"),
  },
];

function ListingsScreen(props) {
  const navigation = useNavigation();
  const [Plants, setPlants] = useState([]);
  const [pp, setp] = useState();
  // const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getPlants = async () => {
      const dataall = await getAllPlantRecords();
      // console.log("getallplant", dataall);
      setPlants(dataall);
    };
    getPlants().catch(console.error);
  }, []);

  const handleCard = (name) => {
    setTimeout(() => {
      navigation.navigate("PlantDetails", { data: [name] });
      // console.log("clicked", name);
    }, 0);
  };
  return (
    <Screen styles={styles.screen}>
      <ScrollView>
        {Plants.map((plant) => {
          return (
            <TouchableOpacity
              key={plant.Name}
              onPress={() => handleCard(plant.Name)}
            >
              <Card
                title={plant.Name}
                subTitle={"$" + plant.Price}
                image={{ uri: plant.Photo }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
