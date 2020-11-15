import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView, Animated  } from "react-native";
import { useRef, useEffect } from "react";

export const ProfileScreen = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <ImageBackground source={{uri: 'https://blogs.ubc.ca/sustainablemarketing/files/2015/04/shutterstock_102228874-900x581.jpg'}}
    style={styles.backImg}>

      <ScrollView style={styles.container}>
        <Text style={styles.miniHeader}>Your</Text>  
        <Text style={styles.largeHeader}>Impact</Text>
        <View style={styles.cards}>
          <Animated.View                 
            style={[styles.cardView, {opacity: fadeAnim}]}
          >

            
          </Animated.View>
        </View>
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
    paddingBottom: 15,
    fontSize: 60,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },

  cards:{
    alignItems: 'center',
  },
  
  cardView:{
    width:"90%",
    height:800,
    backgroundColor: "#EDEDED",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 10,
  },
});
