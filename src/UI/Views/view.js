import {
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  View,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export const NormalTextInput = ({top,pos, ...props}) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      ref={props.ref}
      
      onChangeText={props.onChangeText}
      placeholderTextColor="black"
      style={{
        width:'90%',
        borderRadius: 10,
        
        color:'black',
        backgroundColor: 'white',
        marginTop: top,
      }}
    />
  );
};
export const CustomButton = ({...props}) => {
  const {loader, ...other} = props;

  const displayLoader = () => {
    if (loader) {
      return (
        <ActivityIndicator
          style={{marginLeft: 20}}
          size="small"
          color="white"
        />
      );
    }

    return null;
  };

  return <Button buttonStyle={{padding: 14}} icon={displayLoader} {...other} />;
};

export const NormalButton = ({...props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignContent:'center',
        height:50,
        width: '80%',
        marginTop:'auto',
        backgroundColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        
        bottom: 50,

        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          alignSelf:'center',
          fontSize: 17,
        }}>
        Login
      </Text>
    </TouchableOpacity>
  );
};

export const CustomeDialog = ({visibility, message,...props}) => {
  return (
    <Modal
      style={{
        height: '10%',
        width: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      animationType="slide"
      visible={visibility}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Text style={{color: 'black'}}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};
