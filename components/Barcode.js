import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from "expo-camera";


export default function Barcode({navigation}) {  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState({});
  const [label, setLabel] = useState({})  
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

  

  const askForCameraPermission = () => {
    
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      
      setHasPermission(status === 'granted');
    })();
    
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    console.log("useEffect from Barcode called")
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    console.log("inside handleBarcodescanned --- "+scanned)
    setScanned(true);
    //
    setLabel({
      productID: 'Product ID - ',
      productName: 'Product Name - ',
      quantity: 'Quantity - '
    })
setText({
  productID: data,
  productName: "Slim Jeans in GapFlex",
  quantity: 10
})
    
    console.log('Type: ' + type + '\nData: ' + data);
    setImg(true)
      
        
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <>
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? handleBarCodeScanned : handleBarCodeScanned}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <Text>Trouble scanning barcode?? Enter barcode number manually here </Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Barcode."
          placeholderTextColor="#003f5c"
        /> 

        <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate('ProductDetails')
      }
  }>
        <Text>Submit</Text> 
      </TouchableOpacity>
      </View>
      {scanned ? navigation.navigate('ProductDetails'):null}    

    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  barcodebox: {
    alignItems: 'top',
    justifyContent: 'top',
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato',
    
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems:"center",
    fontSize: 10,
    color: '#20232a',
    fontWeight: 'bold',
  },
  btn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  },
  
  
});
