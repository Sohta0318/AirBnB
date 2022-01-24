import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchBar from "../../components/UI/Search";

const ProductHomeScreen = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <View>
      <SearchBar
        style={styles.search}
        clicked={isClicked}
        setClicked={setIsClicked}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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

const styles = StyleSheet.create({
  search: {},
});

export default ProductHomeScreen;
