import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

import { PayButton } from "./components";
import { Home, Pay, Wallet } from "./screens";

interface NavigationProps {}

export type NavigationTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Pay: undefined;
  Notifications: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<NavigationTabParamList>();

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  function setTabIcons(name: string, size: number, color: string) {
    if (name === "Home") {
      return <AntDesign name="home" size={size} color={color} />;
    } else if (name === "Wallet") {
      return <AntDesign name="creditcard" size={size} color={color} />;
    } else if (name === "Notifications") {
      return (
        <Ionicons name="ios-notifications-outline" size={size} color={color} />
      );
    } else if (name === "Settings") {
      return <Ionicons name="ios-settings" size={size} color={color} />;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          }
          return setTabIcons(route.name, size, color);
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131318",
          borderTopColor: "rgba(255,255,255,0.2",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Início" }} />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ title: "Carteira" }}
      />
      <Tab.Screen name="Pay" component={Pay} options={{ title: "" }} />
      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{ title: "Ajustes" }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
