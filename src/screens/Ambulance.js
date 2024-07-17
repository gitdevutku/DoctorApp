import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {TextInput} from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';

export default function Ambulance({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title={'Call an Ambulance'}
        icon={require('../images/back.png')}
        onPress={() => {
          navigation.navigate('Home');
        }}></Header>
      <Text style={styles.heading}>Address</Text>
      <TextInput style={styles.addressInput}></TextInput>
      <CommonButton
        txt={'Call'}
        status={true}
        w={100}
        h={40}
        onClick={() => {
          navigation.navigate('Checked');
        }}></CommonButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: 15,
    color: '#000',
    fontWeight: '700',
  },
  addressInput: {
    height: 100,
    alignSelf: 'center',
    width: 400,
    borderWidth: 0.5,
    borderRadius: 10,
    textAlignVertical: 'top',
    marginBottom: 50,
  },
});
