import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.space}>space</Text>
          <Text style={styles.X}>X</Text>
        </View>
      </View>
      <View style={styles.appVerContainer}>
        <Text style={styles.appVer}>App Version</Text>
        <Text style={styles.verNum}>1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
