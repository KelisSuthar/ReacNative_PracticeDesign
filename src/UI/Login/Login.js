import React from 'react';
import {KeyboardAvoidingView, useState} from 'react-native';
import styles from './LoginStyles';
import {NormalTextInput, NormalButton, CustomeDialog} from '../Views/view';
import {stringsTexts,async_storage} from '../../Strings/string'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Alert,
  useColorScheme,
  View,
  Button,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

;
const Login = props => {
  const [email, set_email] = React.useState('');
  const [pass, set_pass] = React.useState('');
  const [email_valid, isEmailValid] = React.useState(false);
  const [pass_valid, isPassValid] = React.useState(false);
  const [pass_state, setPassState] = React.useState(true);
  const [dialigShow, setdialogState] = React.useState(false);
  const [dialigMsg, setdialogMsg] = React.useState('');

  const submitData = message => {
    console.log('Email*******' + email_valid);
    console.log('Passwor*****' + pass_valid);
    if (!email_valid) {
      // showAlertDialog(stringsTexts.wrongEmail)
      setdialogState(true);
      setdialogMsg(stringsTexts.wrongEmail);
    } else if (!pass_valid) {
      // showAlertDialog(stringsTexts.wrongPass)
      setdialogState(true);
      setdialogMsg(stringsTexts.wrongPass);
    } else {
      await AsyncStorage.setItem(async_storage.IS_LOGIN,false)
      props.navigation.navigate('Home');
      setdialogState(false);
    }
  };

  const showAlertDialog = message => {
    Alert.alert('Security Alert', message, [{text: 'OK'}]);
  };

  const checkData = (text, isEmail) => {
    const email_regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const pass_regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (isEmail) {
      email_regex.test(text) ? isEmailValid(true) : isEmailValid(false);
    } else {
      pass_regex.test(text) ? isPassValid(true) : isPassValid(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <CustomeDialog
        message={dialigMsg}
        visibility={dialigShow}
        onRequestClose={() => {
          setdialogState(false);
        }}
      />

      <View style={styles.loginView}>
        <View
          style={{
            height:200,
            width: '100%',
            opacity: 0.4,
            backgroundColor: 'white',
            borderRadius: 50,
          }}
        />

        <View style={{position: 'absolute',width:'100%'}}>
          <View alignItems={'center'}>
            <NormalTextInput
              returnKeyType="next"
              placeholder="Email"
              onChangeText={text => checkData(text, true)}
              onSubmitEditing={() => {
                pass.focus();
              }}
            />
          </View>
          <View alignItems={'center'}>
            <NormalTextInput
              onChangeText={text => checkData(text, false)}
              placeholder="Password"
              returnKeyType="done"
              top={30}
              ref={input => {
                pass = input;
              }}
            />
          </View>
        </View>
      </View>
      
      <NormalButton onPress={submitData} />
      
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;
