import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import TouchableOpacity from 'react-native-gesture-handler';
import Header from '../components/Header';
export default function Completed({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Pending Appointments"
        icon={require('../images/back.png')}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <View style={styles.docListItem}>
                <Image
                  style={styles.docPng}
                  source={require('../images/doctor.png')}></Image>
                <View style={{marginTop: 10}}>
                  <Text style={styles.docName}>{'Doctor' + (index + 1)}</Text>
                  <Text style={styles.appointTime}>
                    {'08' + ':' + (index * 10 + 20)}
                  </Text>
                </View>
                <Text style={styles.completed}>{'Pending'}</Text>
              </View>
            );
          }}
          data={[1, 1, 1, 1]}></FlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  docListItem: {
    height: 100,
    borderRadius: 10,
    width: '94%',
    borderWidth: 0.5,
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  docPng: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  docName: {
    alignSelf: 'center',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  appointTime: {
    alignSelf: 'center',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  completed: {
    color: 'orange',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 100,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
  },
});
