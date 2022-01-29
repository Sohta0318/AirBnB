import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

const GiftCard = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Introduction</Text>
        <Text>Airbnb</Text>
        <Text>gift cards</Text>
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Show now</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "80%",
    backgroundColor: "white",
    marginBottom: 50,
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "black",
    borderRadius: 4,
  },
  btnText: {
    padding: 5,
    color: "white",
  },
});
export default GiftCard;
