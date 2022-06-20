import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonHeader} onPress={()=>alert('back')}>
          <Text  style={{backgroundColor:'yellow'}}> Back </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.midBody}>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("1h")}> 
          <Text style={{fontSize:30}}>1h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("2h")}> 
          <Text style={{fontSize:30}}>2h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("3h")}> 
          <Text style={{fontSize:30}}>3h</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.distanceButton} onPress={()=>alert("4h")}> 
          <Text style={{fontSize:30}}>4h</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 10,
    backgroundColor:'blue',
    color:"blue",
    // alignItems: 'center',
     justifyContent: 'center',
  },
  midBody:{
    flex:90,
    backgroundColor:'red',
    alignItems: 'center',
   // justifyContent: 'center',
  },
  distanceButton:{
    width:'80%',
    height:'8%',
    backgroundColor:'pink',
    marginTop:'5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHeader: {
    width:'20%',
    height:'60%',
    fontSize:30,
    marginLeft:'10%'
  },
});
