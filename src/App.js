import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './routes';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const theme = {
  colors: {
    primary: '#131A26',
    secondary: '#464D59',
    white: '#E8E9EA',
  },
  Button: {
    raised: true,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme} useDark={true}>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
