/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import routes from 'app/router';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#38f',
          },
          headerTintColor: '#fff', // font color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {routes.map(route => (
          <Stack.Screen key={route.name} {...route} />
        ))}
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{kk: 'initial params'}}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000', // font color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerRight: () => <Button title="Info" color="#fff" />,
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              fontSize: 30,
            },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
