import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DeliveryScreen } from "../screens/DeliveryScreen";
import { DeliveryInfoScreen } from "../screens/DeliveryInfoScreen";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
      <Stack.Screen name="Info" component={DeliveryInfoScreen} />
    </Stack.Navigator>
    
  );
}

export default AppStack;