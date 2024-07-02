import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from 'app/screens/home';
import ListScreen from 'app/screens/list';
import DetailsScreen from 'app/screens/details';
import ExampleScreen from './screens/example';

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
    component: DetailsScreen as any,
    initialParams: {
      child: [],
      content: 'Fewq',
      created_at: '2024-07-02T09:13:46.707Z',
      id: '2adb8c13-2436-4cef-bea2-695606497c88',
      remark: '',
      remind: undefined,
      repeat: undefined,
      schedule: undefined,
      status: 1,
      today: true,
      updated_at: '2024-07-02T09:13:46.707Z',
      upload: [],
    },
    options: {
      // headerShown: false,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      title: '',
    },
  },

  {
    name: 'Example',
    component: ExampleScreen,
  },
];

export default routes;
