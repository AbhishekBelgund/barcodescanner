import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// You can import from local files
import AssetExample from './components/AssetExample';
import Login from './components/Login'
import Barcode from './components/Barcode'
import Terminalsetup from './components/Terminalsetup'
import Cameranat from './components/Cameranat'
import ProductDetails from './components/ProductDetails'



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
    <Stack.Navigator initialRouteName="Login" detachInactiveScreens>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Barcode" component={Barcode} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
    
      
    </Stack.Navigator>  
    </View>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
