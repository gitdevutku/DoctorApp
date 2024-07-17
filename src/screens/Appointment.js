import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Home from './Home';

export default function Appointment({navigation}) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(0);
  const [selectedGender, setGender] = useState(0);
  const [selectedDaySlot, setSelectedDaySlot] = useState(0);
  const generateDates = numDays => {
    const dates = [];
    for (let i = 0; i < numDays; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toDateString());
    }
    return dates;
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header
          title={'Make An Appointment'}
          icon={require('../images/back.png')}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Image style={styles.docImg} source={require('../images/doctor.png')} />
        <Text style={styles.docName}>Doctor Jack</Text>
        <Text style={styles.spcl}>Skin Specialist</Text>
        <Text style={styles.heading}>Select Day</Text>
        <FlatList
          numColumns={5}
          data={generateDates(30)}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.daySlot,
                {borderColor: selectedDaySlot === index ? 'blue' : 'black'},
              ]}
              onPress={() => setSelectedDaySlot(index)}>
              <Text
                style={{color: selectedDaySlot === index ? 'blue' : 'black'}}>
                {item}
              </Text>
            </TouchableOpacity>
          )}></FlatList>
        <Text style={styles.heading}>Available Sessions</Text>
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.timeSlot,
                {borderColor: selectedTimeSlot === index ? 'blue' : 'black'},
              ]}
              onPress={() => setSelectedTimeSlot(index)}>
              <Text
                style={{color: selectedTimeSlot === index ? 'blue' : 'black'}}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder="Enter name" />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {borderColor: selectedGender === 0 ? 'blue' : 'black'},
            ]}
            onPress={() => setGender(0)}>
            <Image
              style={styles.malePng}
              source={require('../images/male.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {borderColor: selectedGender === 1 ? 'red' : 'black'},
            ]}
            onPress={() => setGender(1)}>
            <Image
              style={styles.malePng}
              source={require('../images/female.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <CommonButton w={300} h={45} txt={'Book Now !'} status={true} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    backgroundColor: '#F2F2F2',
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
  nameInput: {
    height: 40,
    width: '90%',
    borderWidth: 0.5,
    opacity: 0.5,
    borderRadius: 10,
    marginTop: 25,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    borderWidth: 0.5,
    alignItems: 'center',
  },
  malePng: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  daySlot: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginTop: 20,
    borderWidth: 0.5,
  },
});
