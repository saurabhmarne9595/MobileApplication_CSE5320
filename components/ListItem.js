import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}></View>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 5,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  subTitle: {
    color: colors.grey,
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
