import React from 'react';
import {useEffect} from 'react';

import {StatusBar, Text, View} from 'react-native';
const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  });
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <StatusBar hidden />

      <Text
        style={{
          color: 'black',
          fontSize: 50,
          fontWeight: 'bold',
          alignSelf: 'center',
          top: '50%',
        }}>
        Welcome
      </Text>
      {/* <TouchableOpacity
        style={{
          width: '90%',
          borderRadius: 25,
          backgroundColor: '#92C842',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          elevation: 5,
          shadowOffset: {width: 0, height: 10},
          shadowColor: '#92C842',
        }}>
        <Text
          style={{
            marginLeft: 10,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Sign In
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Splash;
