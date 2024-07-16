import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {FlatList} from 'react-native-gesture-handler';

export default function Appointment() {
  const [selectedSlot, setSelectedSlot] = useState(0);
  return (
    <View style={styles.container}>
      <Header
        title={'Make An Appointment'}
        icon={require('../images/back.png')}
      />
      <Image
        style={styles.docImg}
        source={require('../images/doctor.png')}></Image>
      <Text style={styles.docName}>Doctor Jack</Text>
      <Text style={styles.spcl}>Skin Specialist</Text>
      <Text style={styles.heading}>Available Sessions</Text>
      <View>
        <FlatList
          numColumns={2}
          data={[
            '10:00-12:00PM',
            '12:00-02:00PM',
            '02:00-04:00PM',
            '04:00-06:00PM',
            '06:00-08:00PM',
            '08:00-11:00PM',
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  {borderColor: selectedSlot == index ? 'blue' : 'black'},
                ]}
                onPress={() => {
                  setSelectedSlot(index);
                }}>
                <Text style={{color: selectedSlot == index ? 'blue' : 'black'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  docName: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
  spcl: {
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#F2f2f2',
    color: 'green',
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: '#000',
    fontWeight: '700',
  },
  timeSlot: {
    width: 200,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginTop: 20,
    borderWidth: 0.5,
  },
});
