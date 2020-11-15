import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import * as d3 from 'd3-geo';
import region from "../../data/cincinnati_censustracts";
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
  var query = 'SELECT Mean_Travel_Time AS mean FROM All_Hourly_Aggregate WHERE Source_ID = ? AND Dest_ID = ? ORDER BY Mean_Travel_Time DESC LIMIT 3;';
  let arr = [];
 

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
  }



export const DeliveryInfoScreen = ({route, navigation}) => {

  const { source, dest } = route.params;

  var source_coords = [source.lng, source.lat];
  var dest_coords = [dest.lng, dest.lat];

  var source_info= get_zone_info(source_coords);
  var dest_info = get_zone_info(dest_coords);

  //console.log(source_info);

  var arr = calculate_mean_times(source_info[0], dest_info[0]);

  return (
      <ImageBackground source={{uri: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2019/05/Screenshot-2019-05-08-22.21.20.png'}}
        style={styles.backImg}>
        <ScrollView style={styles.container}> 
          <Text>{}</Text>
          <Text>{dest_info[0]}</Text>
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
