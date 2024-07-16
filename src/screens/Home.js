import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title="DocApp" icon={require('../images/logo.png')} />
        <Image
          style={styles.banner}
          source={require('../images/banner.jpg')}></Image>
        <Text style={styles.heading}>Select a Field</Text>
        <View style={(marginTop = 20)}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#7EE8FA', '#EEC0C6']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                      {'Field' + (index + 1)}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Rated Doctors</Text>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <FlatList
            numColumns={2}
            data={[1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View style={styles.docItem}>
                  <Image
                    style={styles.docpng}
                    source={require('../images/doctor.png')}></Image>
                  <Text style={styles.docText}>{'Doctor' + (index + 1)}</Text>
                  <Text style={styles.docSpec}>
                    {'Specialist' + (index + 1)}
                  </Text>
                </View>
              );
            }}></FlatList>
        </View>
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
    borderRadius: 200,
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
  linearGradient: {
    marginTop: 20,
    width: 120,
    height: 80,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: '700',
    backgroundColor: 'transparent',
  },
  docItem: {
    marginTop: 10,
    marginLeft: 10,
    width: '46%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
  },
  docpng: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 30,
  },
  docText: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '700',
  },
  docSpec: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 5,
    fontWeight: '600',
    color: 'green',
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
});
