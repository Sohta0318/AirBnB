import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverViewScreen from "../screens/shop/ProductsOverViewScreen";
import UploadScreen from "../screens/shop/UploadScreen";
import AuthScreen from "../screens/user/AuthScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import ProductHomeScreen, {
  screenOptions as ProductHomeScreenOptions,
} from "../screens/shop/ProductHomeScreen";
import { Platform, View, SafeAreaView, Button } from "react-native";
import Colors from "../constants/Colors";
import ContactScreen from "../screens/common/ContactScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const NoAuthBottomTab = createBottomTabNavigator();
export const NoAuthBottomTabNavigator = () => {
  return (
    <NoAuthBottomTab.Navigator>
      <NoAuthBottomTab.Screen
        name="Explore"
        component={ProductHomeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-search" size={24} color="black" />
          ),
        }}
      />
      <NoAuthBottomTab.Screen
        name="WishList"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-heart-outline" size={24} color="black" />
          ),
        }}
      />
      <NoAuthBottomTab.Screen
        name="Log in"
        component={AuthScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-log-in-outline" size={24} color="black" />
          ),
        }}
      />
    </NoAuthBottomTab.Navigator>
  );
};

const ProductStackNavigator = createNativeStackNavigator();
export const ProductNavigator = () => {
  return (
    <ProductStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductStackNavigator.Screen
        name="Tab"
        component={NoAuthBottomTabNavigator}
      />
      <ProductStackNavigator.Screen
        name="ProductHome"
        component={ProductHomeScreen}
        options={ProductHomeScreenOptions}
      />
      <ProductStackNavigator.Screen
        name="ProductsOverView"
        component={ProductsOverViewScreen}
      />
      <ProductStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </ProductStackNavigator.Navigator>
  );
};

const UploadStackNavigator = createNativeStackNavigator();
export const UploadNavigator = () => {
  return (
    <UploadStackNavigator.Navigator>
      <UploadStackNavigator.Screen
        name="Tab"
        component={NoAuthBottomTabNavigator}
      />
      <UploadStackNavigator.Screen name="Upload" component={UploadScreen} />
    </UploadStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createNativeStackNavigator();
export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator>
      <AdminStackNavigator.Screen
        name="Tab"
        component={NoAuthBottomTabNavigator}
      />
      <AdminStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </AdminStackNavigator.Navigator>
  );
};

const ContactStackNavigator = createNativeStackNavigator();
export const ContactNavigator = () => {
  return (
    <ContactStackNavigator.Navigator>
      <ContactStackNavigator.Screen
        name="Tab"
        component={NoAuthBottomTabNavigator}
      />
      <ContactStackNavigator.Screen name="Contact" component={ContactScreen} />
    </ContactStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Tab"
        component={NoAuthBottomTabNavigator}
      />
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} />
    </AuthStackNavigator.Navigator>
  );
};

const ShopDrawer = createDrawerNavigator();
export const ShopNavigator = () => {
  return (
    <ShopDrawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {}}
              />
            </SafeAreaView>
          </View>
        );
      }}
    >
      <ShopDrawer.Screen
        name="Products"
        component={ProductNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawer.Screen name="Uploads" component={UploadNavigator} />
      <ShopDrawer.Screen name="Admins" component={AdminNavigator} />
      <ShopDrawer.Screen name="Contacts" component={ContactNavigator} />
    </ShopDrawer.Navigator>
  );
};
