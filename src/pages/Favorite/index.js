import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeFavorite} from '../../redux/actions';

const Favorite = () => {
  const {favorites} = useSelector(state => state.rocketsReducer);
  const dispatch = useDispatch();
  const removeFavoriteRocket = rocket => dispatch(removeFavorite(rocket));
  const handleRemoveFavorite = rocket => removeFavoriteRocket(rocket);

  return (
    <View>
      <Header
        centerComponent={{
          text: 'SPACE X - FAVORITE',
          style: styles.centerComponent,
        }}
      />
      {favorites.length === 0 ? (
        <Text style={styles.emptyFavoritText}>Add a rocket to the list.</Text>
      ) : (
        <FlatList
          data={favorites}
          contentContainerStyle={styles.flatList}
          renderItem={({item}) => (
            <View style={styles.gridContainer}>
              <View style={styles.headerGrid}>
                <Text style={styles.title}>{item.rocket_name}</Text>
                <TouchableOpacity onPress={() => handleRemoveFavorite(item)}>
                  <MaterialCommunityIcons
                    name="bookmark"
                    color="white"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 4,
    padding: 6,
    flexDirection: 'column',
    backgroundColor: '#464D59',
    borderRadius: 10,
  },
  emptyFavoritText: {color: '#010101', fontSize: 18, textAlign: 'center'},
  flatList: {padding: 4},
  headerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {flex: 1, fontSize: 16, fontWeight: '600'},
  description: {flex: 1, fontSize: 12, textAlign: 'auto'},
});
