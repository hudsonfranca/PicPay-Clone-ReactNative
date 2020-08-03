import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationTabParamList } from "../../Navigation";

type WalletScreenRouteProp = RouteProp<NavigationTabParamList, "Wallet">;
type WalletScreenNavigationProp = BottomTabNavigationProp<
  NavigationTabParamList,
  "Wallet"
>;

type Props = {
  route: WalletScreenRouteProp;
  navigation: WalletScreenNavigationProp;
};

const Wallet = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
