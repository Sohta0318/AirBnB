import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { SliderBox } from "react-native-image-slider-box";
import SearchBar from "../../components/UI/Search";
import { Images } from "../../data/initial-data";
import MainCard from "../../components/UI/MainCard";

const ProductHomeScreen = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <SearchBar
            style={styles.search}
            clicked={isClicked}
            setClicked={setIsClicked}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <MainCard style={styles.mainCard} navigation={props.navigation} />

          <SliderBox images={Images} />
        </View>
      </ScrollView>
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
  scroll: {
    marginHorizontal: 20,
  },
  mainCard: {
    marginBottom: 20,
  },
});

export default ProductHomeScreen;
