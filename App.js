/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import {useState} from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import Login from './src/UI/Login/Login';
 import Splash from './src/UI/Splash/Splash';
 import Home from './src/UI/Home/Home';
 import BottomTabs from './src/UI/BottomTabs/BottomTabs';
 import {stringsTexts} from './src/Strings/string'
 
 
 
//  const[splash,name] = useState('Splash')  
 const Stack = createStackNavigator();
 const App = () => {
  
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName={stringsTexts.redirectSplash}>
       <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
         <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
         {/* <Stack.Screen name= "Home" options={{headerShown:false}}component={Home} /> */}
         <Stack.Screen name= "BottomTabs" options={{headerShown:false}}component={BottomTabs} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 