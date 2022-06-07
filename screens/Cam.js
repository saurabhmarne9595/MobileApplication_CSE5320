import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
// import * as Permissions from "expo-permissions";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Cam(props) {
  const navigation = useNavigation();
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const permisionFunction = async () => {

    // here is how you can get the camera permission
    // const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    console.log('====================================');
    console.log("LOggING PERMISSION");
    console.log('====================================');
    // const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    setCameraPermission(cameraPermission.status === "granted");
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);
    setGalleryPermission(imagePermission.status === "granted");
    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };
  

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync({
        base64: true,
      });
      const datat = {
        api_key: "API_KEY_BY",
        images: [data.base64],
        modifiers: [
          "crops_fast",
          "similar_images",
          "health_all",
          "disease_similar_images",
        ],
        plant_language: "en",
        plant_details: [
          "common_names",
          "url",
          "name_authority",
          "wiki_description",
          "taxonomy",
          "synonyms",
        ],
        disease_details: ["common_names", "url", "description"],
      };
      // console.log("hbfcuisnbciudsnciws", data.base64);
      axios
        .post("https://api.plant.id/v2/identify", datat)
        .then((res) => {
          navigation.navigate("PlantImageInfo", { data: [res.data] });
          // console.log(res.data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 1,
    });

    // console.log(result);
    if (!result.cancelled) {
      const datat = {
        api_key: "Q3HcIFtCeWNdqpeqtyrQ368kwGfhFFtLHIPTKM7kgcZiR6QHiC",
        images: [result.base64],
        modifiers: [
          "crops_fast",
          "similar_images",
          "health_all",
          "disease_similar_images",
        ],
        plant_language: "en",
        plant_details: [
          "common_names",
          "url",
          "name_authority",
          "wiki_description",
          "taxonomy",
          "synonyms",
        ],
        disease_details: ["common_names", "url", "description"],
      };
      axios
        .post("https://api.plant.id/v2/identify", datat)
        .then((res) => {
          navigation.navigate("PlantImageInfo", { data: [res.data] });
          // console.log(res.data);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
      console.log(result.uri);
      // setImageUri(data.uri);
      setImageUri(result.uri);

    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.galleryContainer}>
        {/* <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        /> */}
      </View>

      {/* <TouchableOpacity onPress={takePicture} style={styles.button}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
       */}
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>
      {/* <Button title={"Take Picture"} onPress={takePicture} /> */}
      {/* <Button title={"Gallery"} onPress={pickImage} /> */}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.galleryContainer} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  // button: {
  //   flex: 0.1,
  //   padding: 10,
  //   alignSelf: "flex-end",
  //   alignItems: "center",
  // },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 110,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
