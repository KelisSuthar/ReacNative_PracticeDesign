import React from 'react';

import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {homeData, getHeightPer, getWidhPer} from '../../Strings/string';

const Row_Item = ({uname, img_path}) => (
  <TouchableOpacity
    style={{

      marginHorizontal:getWidhPer(1),
      flexDirection: 'column',
      alignSelf: 'center',

      justifyContent: 'space-between',
    }}>
    <Image
      source={{uri: img_path}}
      style={{
        marginVertical:getHeightPer(1),
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 40,
        alignSelf: 'center',
        height: getHeightPer(10),
        width: getWidhPer(20),
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

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}>
      <FlatList
        data={homeData}
        renderItem={({item}) => (
          <Row_Item uname={item.name} img_path={item.path} />
        )}
        style={{height: getHeightPer(20), borderColor: 'grey', borderWidth: 1}}
        horizontal={true}
      />

      <FlatList
        data={homeData}
        renderItem={({item}) => (
          <Coloumn_Item uname={item.name} img_path={item.path} />
        )}
        style={{height: '100%', borderColor: 'grey', borderWidth: 1}}
        horizontal={false}
      />
    </View>
  );
};

export default Home;
