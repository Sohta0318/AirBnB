import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductsOverViewScreen from "../screens/shop/ProductsOverViewScreen";
import UploadScreen from "../screens/shop/UploadScreen";
import AuthScreen from "../screens/user/AuthScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import ProductHomeScreen from "../screens/shop/ProductHomeScreen";

const ProductStackNavigator = createNativeStackNavigator();
export const ProductNavigator = () => {
  return (
    <ProductStackNavigator.Navigator>
      <ProductStackNavigator.Screen
        name="ProductHome"
        component={ProductHomeScreen}
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
      <UploadStackNavigator.Screen name="Upload" component={UploadScreen} />
    </UploadStackNavigator.Navigator>
  );
};

const AdminStackNavigator = createNativeStackNavigator();
export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator>
      <AdminStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </AdminStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} />
    </AuthStackNavigator.Navigator>
  );
};

const ShopDrawer = createDrawerNavigator();
export const ShopNavigator = () => {
  return (
    <ShopDrawer.Navigator>
      <ShopDrawer.Screen name="Products" component={ProductNavigator} />
      <ShopDrawer.Screen name="Uploads" component={UploadNavigator} />
      <ShopDrawer.Screen name="Admins" component={AdminNavigator} />
    </ShopDrawer.Navigator>
  );
};
