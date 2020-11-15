import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from "react-native-gesture-handler";
import MotionSlider from 'react-native-motion-slider';
import { Value } from "react-native-reanimated";

export const DeliveryScreen = ({navigation}) => {
  var sourceAdd = 'source';
  var destAdd = 'dest';
  var cargoVal = 500;
  return (
    <ImageBackground source={{uri: 'https://brandondonnelly.files.wordpress.com/2019/05/screen-shot-2019-05-16-at-9.26.30-pm.png'}}
      style={styles.backImg}>
      <ScrollView style={styles.container}
        keyboardShouldPersistTaps={'always'}>
        <Text style={styles.headerText}>Make a Delivery:</Text>

        <Text style={styles.subText}>Your Origin:</Text>
        <GooglePlacesAutocomplete
          placeholder='Origin'
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            sourceAdd = details.geometry.location;
          }}
          query={{
            key: 'AIzaSyBg00ZXrGviFsX_8bb7qKqBYj16J39mdQU',
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'grey',
            },
            textInput: {
              height: 60,
              color: 'black',
              fontSize: 16,
            },
          }}
        />

        <Text style={styles.subText}>Your Destination:</Text>
        <GooglePlacesAutocomplete
          placeholder='Destination'
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            destAdd = details.geometry.location;
          }}
          query={{
            key: 'AIzaSyBg00ZXrGviFsX_8bb7qKqBYj16J39mdQU',
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'grey',
            },
            textInput: {
              paddingVertical: 0,
              height: 60,
              color: 'black',
              fontSize: 16,
            },
          }}
        />

        <Text style={styles.subText}>Cargo Weight (lbs):</Text>
        <View style={styles.sliderCont}>
          <MotionSlider
            width={400}
            fontSize={18}
            valueBackgroundColor = {'#005E5D'}
            valueColor = {'white'}
            backgroundColor={['white']}
            maxColor = {'#005E5D'}
            minColor = {'#005E5D'}
            min={0} 
            max={500}
            value={250} 
            decimalPlaces={0}
            onValueChanged={(value) => cargoVal=value}
            onPressIn={() => console.log('Pressed in')}
            onPressOut={() => console.log('Pressed out')}
            onDrag={() => console.log('Dragging')}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
              onPress={() => {
                navigation.navigate('Info', {
                  source: sourceAdd,
                  dest: destAdd,
                  cargo: cargoVal,
                });
              }}
              style={[styles.signIn, {
                  marginTop:0
              }]}
          >
              <LinearGradient
                  colors={['#3FE1B0', '#3FE1B0']}
                  style={styles.signIn}
              >
                  <Text style={[styles.textSign, {
                      color:'white'
                  }]}
                  >
                      Delivery Times
                  </Text>
              </LinearGradient>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
    fontSize: 60,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },

  subText:{
    paddingTop: 20,
    paddingLeft: 25,
    paddingBottom: 15,
    fontSize: 20,
    fontFamily: "Roboto",
    color: "white",
  },

  button: {
      alignItems: 'center',
      marginTop: 50
  },

  sliderCont: {
    alignItems: 'center',
  },
  signIn: {
    width: '75%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  textSign: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
