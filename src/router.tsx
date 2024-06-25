import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from 'app/screens/home';
import DetailsScreen from 'app/screens/details';

const routes: Parameters<typeof Stack.Screen>[number][] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false, // hide header
      // title: 'Overview',
      // headerStyle: {
      //   backgroundColor: '#fff',
      // },
      // headerTintColor: '#000', // font color
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    initialParams: {
      key: 'day',
      name: '我的一天',
    },
    options: {
      headerShown: false,
    },
  },
];

export default routes;
