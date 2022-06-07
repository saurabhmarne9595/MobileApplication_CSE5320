import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  <TouchableWithoutFeedback onPress={onPress}>
    return <View style={styles.container}></View>;
  </TouchableWithoutFeedback>;
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 70,
  },
});
