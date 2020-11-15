import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";
import { DeliveryScreen } from "../../screens/DeliveryScreen";
import { HistoryScreen } from "../../screens/HistoryScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="car" component={DeliveryScreen} />
        <Tab.Screen name="clockcircleo" component={HistoryScreen} />
        <Tab.Screen name="dotchart" component={ProfileScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};