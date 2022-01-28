import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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

const NoAuthBottomTab = createMaterialBottomTabNavigator({
  Explore: {
    screen: ProductHomeScreen,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name="ios-search" size={24} color="black" />,
    },
  },
  WishList: ProfileScreen,
  "Log in": AuthScreen,
});
// const NoAuthBottomTab = createBottomTabNavigator();
// export const NoAuthBottomTabNavigator = () => {
//   return (
//     <NoAuthBottomTab.Navigator screenOptions={{ headerShown: false }}>
//       <NoAuthBottomTab.Screen
//         name="Explore"
//         component={ProductNavigator}
//         options={{
//           tabBarIcon: () => (
//             <Ionicons name="ios-search" size={24} color="black" />
//           ),
//         }}
//       />
//       <NoAuthBottomTab.Screen
//         name="WishList"
//         component={AdminNavigator}
//         options={{
//           tabBarIcon: () => (
//             <Ionicons name="ios-heart-outline" size={24} color="black" />
//           ),
//         }}
//       />
//       <NoAuthBottomTab.Screen
//         name="Log in"
//         component={AuthNavigator}
//         options={{
//           tabBarIcon: () => (
//             <Ionicons name="ios-log-in-outline" size={24} color="black" />
//           ),
//         }}
//       />
//     </NoAuthBottomTab.Navigator>
//   );
// };

const ProductsNavigator = createStackNavigator(
  {
    Tab: NoAuthBottomTab,
    ProductHome: ProductHomeScreen,
    ProductsOverview: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const UploadNavigator = createStackNavigator({
  Upload: UploadScreen,
  Tab: NoAuthBottomTab,
});

const AdminNavigator = createStackNavigator({
  Profile: ProfileScreen,
  Tab: NoAuthBottomTab,
});

const ContactNavigator = createStackNavigator({
  Contact: ContactScreen,
  Tab: NoAuthBottomTab,
});

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen,
  Tab: NoAuthBottomTab,
});

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Upload: UploadNavigator,
    Admin: AdminNavigator,
    Contact: ContactNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
    contentComponent: (props) => {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerNavigatorItems {...props} />
            <Button title="Logout" color={Colors.primary} onPress={() => {}} />
          </SafeAreaView>
        </View>
      );
    },
  }
);

export default createAppContainer(ShopNavigator);
