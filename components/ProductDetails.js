import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';

import { Camera } from "expo-camera";

export default function ProductDetails({navigation}){

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [validqty, setValidqty] = useState()
  const [text, setText] = useState({
    productID: 123456789012,
   productName: "Slim Jeans in GapFlex",
   quantity: 10
  });
  const [label, setLabel] = useState({
     productID: 'Product ID - ',
       productName: 'Product Name - ',
       quantity: 'Quantity - '
  })  
  const [message, setMessage] = useState('')
  const [img, setImg] = useState(false)

    const onPressChangeQty = ()=>{
      if(!text.quantity){
        setMessage('Provide a valid quantity')
        setValidqty(false)
      }
      else{
      setMessage('Quantity saved!!')
      setValidqty(true)
      }
  }

// (()=>{
//   setScanned(true)
//   setLabel({
//       productID: 'Product ID - ',
//       productName: 'Product Name - ',
//       quantity: 'Quantity - '
//     })
// setText({
//   productID: 123456789012,
//   productName: "Slim Jeans in GapFlex",
//   quantity: 10
// })
// }) ();


return (

  <>
    <View style={styles.container}>
    <Image style={{width:400, height:90, borderBottomWidth: StyleSheet.hairlineWidth}} source={require("./jeans.jpg")} />
     <Text style={styles.maintext}>{label.productID} {text.productID}</Text>
      <Text style={styles.maintext}>{label.productName} {text.productName}</Text>
      <TextInput style={styles.maintext}>{label.quantity} {text.quantity}
      
      </TextInput>
      <View style={styles.buttonContainer}>
      {scanned ? <Button title={'Change Quantity'} color='green' onPress={onPressChangeQty}/>: null} 
      </View>

       <Text style={styles.maintext}>
      {message}
      </Text>

      

      {scanned && (
        <Button
          title={'Scan again?'}
          onPress={() => {setScanned(false)
          setMessage('')
          setText({})
          setLabel({})
          
          }}
          color="tomato"
        />
        
      )}
      {!scanned ? navigation.navigate('Barcode'):null}

      </View>

    </>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 15,
    
    height: 1,
    flex: 1,
    padding: 4,
    
    alignItems:"center",
    fontWeight: 'bold',
    color: '#20232a',
    lineHeight: 10,
    
  },
  
  buttonContainer: {
    margin: 2,
  },
 
  
});