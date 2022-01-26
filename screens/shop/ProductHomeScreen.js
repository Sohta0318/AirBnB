import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SliderBox } from "react-native-image-slider-box";
import SearchBar from "../../components/UI/Search";
import { Images } from "../../data/initial-data";

const ProductHomeScreen = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <SearchBar
          style={styles.search}
          clicked={isClicked}
          setClicked={setIsClicked}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SliderBox images={Images} />
      </View>
    </SafeAreaView>
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
  wrapper: {
    flex: 1,
  },
});

export default ProductHomeScreen;
