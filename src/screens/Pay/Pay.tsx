import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationTabParamList } from "../../Navigation";

type PayScreenRouteProp = RouteProp<NavigationTabParamList, "Pay">;
type PayScreenNavigationProp = BottomTabNavigationProp<
  NavigationTabParamList,
  "Pay"
>;

type Props = {
  route: PayScreenRouteProp;
  navigation: PayScreenNavigationProp;
};

const Pay: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pay</Text>
    </View>
  );
};

export default Pay;
