import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const MainCard = (props) => {
  return (
    <View style={{ ...styles.imageContainer, ...props.style }}>
      <Image
        source={require("../../assets/images1.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>Not Sure Where to Go? Perfect.</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.navigation.navigate("ProductsOverView");
        }}
      >
        <Text style={styles.text}>I'm Flexible</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  btn: {
    position: "absolute",
    top: "70%",
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 20,
  },
  text: {
    color: Colors.primary,
    padding: 10,
  },
  title: {
    position: "absolute",
    top: "70%",
    color: "white",
    zIndex: 2,
  },
});

export default MainCard;
