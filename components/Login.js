import React, { useState, useEffect } from "react";
import {StyleSheet,   View, TextInput, TouchableOpacity, Text } from 'react-native';

import Constants from 'expo-constants';

export default function Login ({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState();
  
  const onPressLogin = ()=>{
      if(!email || !password)
        setStatus(false)
      else{
      setStatus(true)
      
      }
     
  }
  
  return (
    <>
    <Text style={styles.paragraph}>
        GAP  {"\n"}
        WMS SYSTEM {"\n"} {"\n"}
        LOGIN 
      </Text>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="ENTER ID."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PASSWORD."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>{
        if(!email || !password)
        setStatus(false)
      else{
      setStatus(true)
       navigation.navigate('Barcode')
      }
     
      
      }
     
  }>
        <Text>LOGIN</Text> 
      </TouchableOpacity>

      {status === true && <Text>Login success</Text> }

        {status === false && <Text>Invalid cred</Text>}
        
      </>
        );
  
}

const styles = StyleSheet.create({
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
  },
  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})