import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

export const HistoryScreen = () => {
  return (
      <ImageBackground source={{uri: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2019/05/Screenshot-2019-05-08-22.21.20.png'}}
        style={styles.backImg}>
        <ScrollView style={styles.container}> 

          <Text style={styles.headerText}>Delivery History:</Text>

        </ScrollView>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005E5D",
    opacity: .85,
  },

  backImg:{
    width:"100%",
    height:"100%",
  },

  headerText:{
    paddingLeft: 25,
    paddingTop: 45,
    paddingBottom: 45,
    fontSize: 55,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },

  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: 200,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  textSign: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
