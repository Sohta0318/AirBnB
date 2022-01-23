import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchBar from "../../components/UI/Search";

const ProductHomeScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Home Screen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="ios-basket"
          onPress={() => {
            navData.navigation.navigate("ProductsOverView");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default ProductHomeScreen;
