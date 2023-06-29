import React, { useState, useEffect } from "react";
import {StyleSheet,   View, TouchableOpacity, Text } from 'react-native';

import Barcode from './Barcode'
import Constants from 'expo-constants';

const onPress = ()=>{
  console.log("radio button clicked")
}

export default function Terminalsetup({navigation}){

const [terminal, setTerminal] = useState('')
  const terminals = ['Receiving','Stock Moves','Invt Ctrl','Shipping','Labour Mgmt','Pre-ship']

return(
  <>
<View style={styles.container}>
      <Text> Select an option </Text>

      <View>
        {terminals.map((t)=>{
            <View key={t}>
              <Text>{t}</Text>
               <TouchableOpacity style={styles.btn} onPress={()=> setTerminal(t)}>
               {terminal === t && <View></View>}
        <Text>Continue</Text> 
      </TouchableOpacity>  
            </View>
        })}
      </View>
         
         
    </View>
  </>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  
});