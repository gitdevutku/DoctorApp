import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function CommonButton({w, h, txt, onClick, status}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}>
      {status ? (
        <LinearGradient
          colors={['#97CC04', '#2D7DD2']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#8e8e8e', '#8e8e8e']}
          style={{
            width: w,
            height: h,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            padding: 10,
            opacity: 0.5,
          }}>
          <Text style={{color: '#FFF', fontSize: 16}}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
