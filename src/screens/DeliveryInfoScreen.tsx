import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

export const DeliveryInfoScreen = ({route, navigation}) => {

  const { source, dest, cargo } = route.params;
  return (
      <ImageBackground source={{uri: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2019/05/Screenshot-2019-05-08-22.21.20.png'}}
        style={styles.backImg}>
        <ScrollView style={styles.container}>

          {/* <Text>{JSON.stringify(source)}</Text>
          <Text>{JSON.stringify(dest)}</Text>
          <Text>{cargo}</Text> */}
          <Text style={styles.headerText}>Your Options:</Text>
          <View style={styles.cards}>

            <View style={styles.cardView}>
              <View style={[styles.cardHeader, {backgroundColor: "#88FFD1"}]}>
                <Text style={styles.cardHeadText}>Option #1 (Recommended)</Text>
              </View>
              <Text style={styles.cardText}> Modal Choice: Cargo Bike 🚴</Text>
              <Text style={styles.cardText}> Trip Timing: Mid-Day</Text>
              <View style={styles.cardLine}/>
              <Text style={[styles.cardText, {fontSize: 18, marginTop:15, marginLeft: 20, fontWeight: "normal"}]}> 
              This is the ideal mode based on your trip plan and cargo weight. You will reduce your emissions and help mitigate congestion
              and noise pollution in the neighborhoods you visit.</Text>

              <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn, {
                        marginTop:0
                    }]}
                >
                    <LinearGradient
                        colors={['#88FFD1', '#88FFD1']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'black'
                        }]}
                        >
                            Let's Go >
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.cardView}>
              <View style={[styles.cardHeader, {backgroundColor: "#FFD567"}]}>
                <Text style={styles.cardHeadText}>Option #2 (Okay)</Text>
              </View>
              <Text style={styles.cardText}> Modal Choice: Small Truck 🚚</Text>
              <Text style={styles.cardText}> Trip Timing: Mid-Day</Text>
              <View style={styles.cardLine}/>
              <Text style={[styles.cardText, {fontSize: 18, marginTop:15, marginLeft: 20, fontWeight: "normal"}]}> 
              If Option #1 is not feasible, this is the next best option. Decreased traffic during this time will make offloading packages a less of a hassle</Text>

              <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn, {
                        marginTop:0
                    }]}
                >
                    <LinearGradient
                        colors={['#FFD567', '#FFD567']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'black'
                        }]}
                        >
                            Let's Go >
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

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
    width: "100%",
  },

  backImg:{
    width:"100%",
    height:"100%",
  },

  cards:{
    alignItems: 'center',
  },
  
  cardView:{
    width:"90%",
    height:500,
    backgroundColor: "#EDEDED",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 10,
  },

  cardHeader:{
    width:"100%",
    height:"15%",
    marginBottom: 20,
  },

  cardHeadText:{
    margin: 20,
    fontSize: 26,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
  },

  cardText:{
    marginLeft: 15,
    marginBottom: 15,
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "black",
  },

  cardLine:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginRight: 10,
    marginLeft: 10,
  },

  headerText:{
    paddingLeft: 25,
    paddingTop: 50,
    paddingBottom: 45,
    fontSize: 45,
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
