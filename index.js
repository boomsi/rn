/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from '@rneui/themed';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
