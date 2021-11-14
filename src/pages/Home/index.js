import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import RocketSection from './Sections/RocketSection';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const {error} = useSelector(state => state.rocketsReducer);
  useEffect(() => {
    console.log(error);
    if (error !== null) {
      () => alert('There is an Error!');
    }
  }, [error]);

  return (
    <View>
      <Header
        centerComponent={{
          text: 'SPACE X - ROCKET API',
          style: styles.centerComponent,
        }}
      />
      <RocketSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centerComponent: {fontWeight: 'bold', fontSize: 18},
});
