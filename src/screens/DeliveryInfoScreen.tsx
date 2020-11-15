import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import * as d3 from 'd3-geo';
import region from "../../data/cincinnati_censustracts";


//SOURCE: 100 West Elder Street, Over-The-Rhine, Cincinnati
//DEST: 2600 Bellevue Avenue, Corryville, Cincinnati
var ex1 = {s_id: "359", d_id: "199", Mean_Travel:6.48, Best_Hour:"Evening Early", Best_Hour_Time:"6.36"};

//SOURCE:Walmart Supercenter, 2322 Ferguson Rd, Cincinnati, OH
//DEST: 3300 Morrison Avenue, Clifton, Cincinnati
var ex2 = {s_id: "150", d_id: "36", Mean_Travel:14.45, Best_Hour:"Midday", Best_Hour_Time:"13.41"};

var ex_arr = [ex1, ex2];
/*
//import { openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite';

// Check if the directory where we are going to put the database exists
let dirInfo;
try {
    dirInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`);
} catch(err) { Sentry.captureException(err) };
  
if (!dirInfo.exists) {
  try {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
  } catch(err) { Sentry.captureException(err) }
};

// Downloads the db from the original file
// The db gets loaded as read only
FileSystem.downloadAsync(
  Asset.fromModule(require('../databases/programs.db')).uri,
    `${FileSystem.documentDirectory}SQLite/programs${version}.db`
  ).then(() => {
  programsDB = SQLite.openDatabase(`programs${version}.db`); // We open our downloaded db
  loadDB(loaded); // We load the db into the persist store
}).catch(err => Sentry.captureException(err));
**/

function get_zone_info(coords){
  var zone;
  
  for (zone of region.features){
    //console.log(zone);
    if (d3.geoContains(zone, coords)){
      return [zone.properties.MOVEMENT_ID, zone.properties.DISPLAY_NAME];
    }
  }


   /* TESTS
  var zone = region.features[0];
  var centroid = d3.geoCentroid(zone);                        //-TRUE
  console.log(d3.geoContains(zone, centroid));                //-TRUE
  console.log(d3.geoContains(zone, [-84.344625, 39.311512])); //-TRUE
  console.log(d3.geoContains(zone, [-84.347761, 39.302136])); //-TRUE
  console.log(d3.geoContains(zone, [-84.357926, 39.303484])); //-FALSE
  */
}

function calculate_mean_times(zone1, zone2){
  //var query = 'SELECT Mean_Travel_Time AS mean FROM All_Hourly_Aggregate WHERE Source_ID = ? AND Dest_ID = ? ORDER BY Mean_Travel_Time DESC LIMIT 3;';

  let ret_zone = null;

  ex_arr.forEach(zone => {
  if (zone.s_id == zone1 && zone.d_id == zone2){
    ret_zone = zone;
  } 
  });



  /*
  db.transaction(
  tx => {
    tx.executeSql(query, [zone1, zone2], (trans, result) => {
      console.log(trans, result);
      console.log('hi');
    });
  }
  );
  return arr;

  */

  return ret_zone;
}



export const DeliveryInfoScreen = ({route, navigation}) => {

  const { source, dest, cargo } = route.params;

  var source_coords = [source.lng, source.lat];
  var dest_coords = [dest.lng, dest.lat];

  var source_info= get_zone_info(source_coords);
  var dest_info = get_zone_info(dest_coords);

  
  //console.log(source_info);

  //result object
  var result_zone_data = calculate_mean_times(source_info[0], dest_info[0]);
  var modalChoice1 = "";
  var modalChoice2 = "";
  
  console.log('hi');
  //console.log(result_zone_data.s_id);
  
  if(result_zone_data == null){
    result_zone_data = {s_id: "31", d_id: "199", Mean_Travel:6.48, Best_Hour:"Morning Peak", Best_Hour_Time:"6.36"};


  }
 
    
  if(result_zone_data.Mean_Travel < 7 && cargo < 200){
    modalChoice1 = "Cargo Bike 🚴";
    modalChoice2 = "Cargo Truck 🚚";
  } else {
    modalChoice1 = "Cargo Truck 🚚";
    modalChoice2 = "Cargo Truck 🚚";
  }
  
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
              <Text style={styles.cardText}> Modal Choice: {modalChoice1}</Text>
              <Text style={styles.cardText}> Best Time: {result_zone_data.Best_Hour}</Text>
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
              <Text style={styles.cardText}>Modal Choice: {modalChoice2}</Text>
              <Text style={styles.cardText}>Best Time: {result_zone_data.Best_Hour}</Text>
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
