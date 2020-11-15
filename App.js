import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {BottomMenu} from "./src/components/BottomMenu/BottomMenu";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as d3 from 'd3-geo';
import region from "./data/cincinnati_censustracts";

export default function App() {
  var zone_info= get_zone_id([-84.325483, 39.364387]);
  console.log(zone_info);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <BottomMenu/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


function get_zone_id(coords){
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
