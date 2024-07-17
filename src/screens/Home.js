import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header title="DocApp" icon={require('../images/logo.png')} />
      <Image style={styles.banner} source={require('../images/banner.jpg')} />
      <Text style={styles.heading}>Select a Field</Text>
      <View style={styles.fieldContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <LinearGradient
                  colors={['#7EE8FA', '#EEC0C6']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    {'Field ' + (index + 1)}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.heading}>Top Rated Doctors</Text>
      <View style={styles.doctorContainer}>
        <FlatList
          numColumns={2}
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const isAvailable = index % 2 === 0;
            return (
              <View style={styles.docItem}>
                <Image
                  style={styles.docpng}
                  source={require('../images/doctor.png')}
                />
                <Text style={styles.docText}>{'Doctor ' + (index + 1)}</Text>
                <Text style={styles.docSpec}>
                  {'Specialist ' + (index + 1)}
                </Text>
                <Text
                  style={[
                    styles.status,
                    {
                      color: isAvailable ? 'green' : 'red',
                      opacity: isAvailable ? 1 : 0.5,
                    },
                  ]}>
                  {isAvailable ? 'Available' : 'Busy'}
                </Text>
                <CommonButton
                  style={styles.btnAppoint}
                  w={'100%'}
                  h={40}
                  txt={'Make an Appointment'}
                  status={isAvailable ? true : false}
                  onClick={() => {
                    if (isAvailable) {
                      navigation.navigate('Appointment');
                    }
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  heading: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
    color: '#000',
    fontWeight: '700',
  },
  fieldContainer: {
    marginTop: 20,
  },
  linearGradient: {
    width: 120,
    height: 80,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: '700',
    backgroundColor: 'transparent',
  },
  doctorContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  docItem: {
    marginTop: 20,
    marginLeft: 10,
    width: '46%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
  },
  docpng: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  docText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '700',
  },
  docSpec: {
    alignSelf: 'center',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    color: 'green',
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  status: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
