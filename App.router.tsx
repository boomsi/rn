/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomeScreen({navigation, route}: {navigation: any; route: any}) {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Text>Params kk: {route.params.kk}</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Details', {
              id: '2333',
              kk: 'This is Params',
            })
          }
        />
        <Button
          title="Update params"
          onPress={() =>
            navigation.setParams({
              kk: 'Updated Params',
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

function DetailsScreen({navigation, route}: {navigation: any; route: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.kk}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go to Top" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{kk: 'initial params'}}
          options={{
            title: 'Overview',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    rowGap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    height: 80,
    padding: 10,
    margin: 8,
  },
  block: {
    backgroundColor: '#38f',
    width: 100,
    height: 100,
  },
  platform: {
    fontSize: 20,
    color: '#38f',
  },
  listItem: {
    height: 40,
  },
});

export default App;
