import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from 'app/screens/home';
import DetailsScreen from 'app/screens/detail';

const routes: Parameters<typeof Stack.Screen>[number][] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      title: 'Overview',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000', // font color
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  {
    name: 'Details',
    component: DetailsScreen,
  },
];

export default routes;
