import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Checked({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.checkedImg}
        source={require('../images/checked.png')}></Image>
      <Text style={styles.checkedText}>
        Your appointment succesfully booked.
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.checkedBtn}>
        <Text style={styles.checkedBtnText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  checkedImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  checkedText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  checkedBtn: {
    width: 200,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
