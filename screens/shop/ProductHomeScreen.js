import React from "react";
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import PRODUCT from "../../data/initial-data";

const ProductHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // horizontal
        data={PRODUCT}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {}}
          ></ProductItem>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductHomeScreen;
