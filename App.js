import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {BottomMenu} from "./src/components/BottomMenu/BottomMenu";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <SafeAreaProvider>
          <BottomMenu/>
      </SafeAreaProvider>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <Text>HELLO MATTHEW</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> a7ffa8c3b883717f82c39c3395e344bcc7b4c0e1
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 1000,
    fontWeight: "bold"
  }
});
