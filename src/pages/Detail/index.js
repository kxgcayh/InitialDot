import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const RocketDetail = ({route}) => {
  const {rocket} = route.params;
  const dimension = Dimensions.get('window');

  return (
    <ScrollView>
      <Header
        centerComponent={{
          text: `Rocket ${rocket.rocket_name}`,
          style: styles.centerComponent,
        }}
      />
      <Image
        source={{uri: `${rocket.flickr_images[1]}`}}
        style={{width: dimension.width, height: dimension.width}}
        resizeMode="cover"
      />
      <View style={{padding: 10}}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={[styles.defaultText, {fontSize: 20, fontWeight: '400'}]}>
            {rocket.rocket_name}
          </Text>
          <Text style={[styles.defaultText, {fontSize: 28, fontWeight: '600'}]}>
            Overview
          </Text>
        </View>
        <RowSection
          leftContent={'HEIGHT'}
          firstRightContent={`${rocket.height.meters}m `}
          secondRightContent={`${rocket.height.feet}ft`}
        />
        <RowSection
          leftContent={'DIAMETER'}
          firstRightContent={`${rocket.diameter.meters}m `}
          secondRightContent={`${rocket.diameter.feet}ft`}
        />
        <RowSection
          leftContent={'MASS'}
          firstRightContent={`${rocket.mass.kg}kg `}
          secondRightContent={`${rocket.mass.lb}lb`}
        />
        {rocket.payload_weights.map(payload => (
          <RowSection
            key={payload.id}
            leftContent={`PAYLOAD TO ${payload.id.toUpperCase()}`}
            firstRightContent={`${payload.kg}kg `}
            secondRightContent={`${payload.lb}lb`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const RowSection = ({leftContent, firstRightContent, secondRightContent}) => {
  return (
    <View
      style={{
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
      }}>
      <Text style={[styles.defaultText, {fontSize: 18, fontWeight: '400'}]}>
        {leftContent}
      </Text>
      <View style={{flexDirection: 'row', paddingBottom: 6}}>
        <Text style={[styles.defaultText, {fontSize: 18, fontWeight: '500'}]}>
          {firstRightContent}
        </Text>
        <Text style={[styles.defaultText, {fontSize: 18, fontWeight: '500'}]}>
          / {secondRightContent}
        </Text>
      </View>
    </View>
  );
};

export default RocketDetail;

const styles = StyleSheet.create({
  defaultText: {color: '#000'},
  centerComponent: {fontWeight: 'bold', fontSize: 18},
});
