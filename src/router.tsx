import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from 'app/screens/home';
import ListScreen from 'app/screens/list';
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
    name: 'List',
    component: ListScreen,
    initialParams: {
      key: 'day',
      name: '我的一天',
    },
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: {
      // headerShown: false,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      title: '',
    },
  },
];

export default routes;
