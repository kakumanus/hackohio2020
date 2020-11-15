import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";

export const ProfileScreen = () => {
  return (
    <ImageBackground source={{uri: 'https://blogs.ubc.ca/sustainablemarketing/files/2015/04/shutterstock_102228874-900x581.jpg'}}
    style={styles.backImg}>
    
      <ScrollView style={styles.container}>
        <Text style={styles.miniHeader}>Your</Text>  
        <Text style={styles.largeHeader}>Impact</Text>
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

  miniHeader:{
    paddingLeft: 25,
    fontSize: 35,
    paddingTop: 45,
    paddingBottom: -15,
    marginBottom: -15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },

  largeHeader:{
    paddingLeft: 25,
    fontSize: 60,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },
});
