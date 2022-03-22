import React from 'react';

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {homeData, getHeightPer, getWidhPer} from '../../Strings/string';

const Row_Item = ({uname, img_path}) => (
  <TouchableOpacity
    style={{
      margin: 20,
      flexDirection: 'column',
      alignSelf: 'center',

      justifyContent: 'space-between',
    }}>
    <Image
      source={{uri: img_path}}
      style={{
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 40,
        alignSelf: 'center',
        height: 70,
        width: 70,
      }}
    />
    <Text style={{color: 'black', alignSelf: 'center'}}>{uname}</Text>
  </TouchableOpacity>
);
const Coloumn_Item = ({uname, img_path}) => (
  <View
    style={{flexDirection: 'column', alignSelf: 'flex-start', width: '100%'}}>
    <Image
      source={{uri: img_path}}
      style={{
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        height: 250,
        width: '100%',
      }}
    />
    <Text
      style={{
        color: 'black',
        alignSelf: 'flex-start',
        width: '100%',
        marginVertical: 10,
      }}>
      {uname}
    </Text>
  </View>
);

const Home2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
      
    </View>
  );
};

export default Home2;
