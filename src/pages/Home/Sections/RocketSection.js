/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {Badge} from 'react-native-elements';
import DropShadow from 'react-native-drop-shadow';
import {useSelector, useDispatch} from 'react-redux';
import {getRockets, addFavorite, removeFavorite} from '../../../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const RocketSection = () => {
  const navigation = useNavigation();
  const {rockets, favorites} = useSelector(state => state.rocketsReducer);
  const dispatch = useDispatch();

  // Dispatch Function
  const fetchRockets = () => dispatch(getRockets());
  const addFavoriteRocket = rocket => dispatch(addFavorite(rocket));
  const removeFavoriteRocket = rocket => dispatch(removeFavorite(rocket));

  // Handle Function
  const handleAddFavorite = rocket => addFavoriteRocket(rocket);
  const handleRemoveFavorite = rocket => removeFavoriteRocket(rocket);

  const isExists = rocket => {
    if (favorites.filter(value => value.id === rocket.id).length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <View style={styles.main}>
      <Text style={styles.categoryTitle}>Rocket List</Text>
      {rockets.map(item => (
        <CardContainer
          key={item.id}
          rocket={item}
          onPressContainer={() => {
            navigation.push('RocketDetail', {
              rocket: item,
            });
          }}
          onPressBookmark={() =>
            isExists(item)
              ? handleRemoveFavorite(item)
              : handleAddFavorite(item)
          }
          bookmarkIcon={isExists(item) ? 'bookmark' : 'bookmark-outline'}
        />
      ))}
    </View>
  );
};

const CardContainer = ({
  rocket,
  onPressContainer,
  onPressBookmark,
  bookmarkIcon,
}) => {
  return (
    <TouchableOpacity onPress={onPressContainer}>
      <DropShadow style={styles.cardShadowd}>
        <View style={styles.card}>
          <View style={styles.content}>
            <View style={styles.leftContent}>
              <Text style={styles.name}>{rocket.rocket_name}</Text>
              <Text style={styles.defaultText}>
                {rocket.description.length > 80
                  ? `${rocket.description.substring(0, 80)}...`
                  : rocket.description}
              </Text>
            </View>
            <View style={styles.rightContent}>
              <TouchableOpacity onPress={onPressBookmark}>
                <MaterialCommunityIcons
                  name={bookmarkIcon}
                  color="black"
                  size={25}
                />
              </TouchableOpacity>
              <Status isActive={rocket.active} />
            </View>
          </View>
        </View>
      </DropShadow>
    </TouchableOpacity>
  );
};

const Status = ({isActive}) => {
  if (isActive === true) {
    return (
      <View style={styles.statusContainer}>
        <Badge status="success" containerStyle={styles.badge} />
        <Text style={styles.defaultText}>Active</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.statusContainer}>
        <Badge status="error" containerStyle={styles.badge} />
        <Text style={styles.defaultText}>Inactive</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {paddingVertical: 5, paddingHorizontal: 20},
  categoryTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  cardShadowd: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  card: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 25,
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statusContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {position: 'absolute', top: 7, left: -12},
  defaultText: {color: '#000'},
  name: {color: '#000', fontWeight: '600', fontSize: 18},
});

export default RocketSection;
