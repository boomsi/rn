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
import 'dayjs/locale/zh-cn';
import localeData from 'dayjs/plugin/localeData';
import dayjs from 'dayjs';

dayjs.extend(localeData)
dayjs.locale('zh-cn');

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
