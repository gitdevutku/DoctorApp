import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo}></Image>
      <Text style={styles.title}>Doctor App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#FFF',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    marginTop: 20,
  },
});
