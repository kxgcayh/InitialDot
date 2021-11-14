import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  mainContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  space: {
    fontSize: normalize(35),
    fontWeight: '100',
    color: 'white',
  },
  X: {
    fontSize: normalize(35),
    fontWeight: '700',
    color: 'white',
  },
  appVerContainer: {flex: 1, alignItems: 'center'},
  appVer: {fontSize: normalize(18), color: 'white', fontWeight: '600'},
  titleContainer: {flexDirection: 'row'},
  verNum: {fontSize: normalize(18), color: 'white', fontWeight: '600'},
});
