/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
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
        <Text>Params kk: {route.params.post}</Text>
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
  const [value, setValue] = useState<string>('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        value={value}
        onChangeText={t => setValue(t)}
        placeholder="Input something"
        multiline
        numberOfLines={6}
        style={styles.textInput}
      />
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {post: value},
            merge: true,
          })
        }
      />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      /> */}
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      {/* <Button title="Go to Top" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      // source={require('@expo/snack-static/react-native-logo.png')}
      source={{
        uri: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2Fb812c8fcc3cec3fd4b443ebbe11fe5318694272f.jpeg%40f_auto%3Ftoken%3D31cf3b839a5a3751818dc81b8422b4eb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1718989200&t=07f0424910138e12c3d1724f2acfe86f',
      }}
    />
  );
}

const Stack = createNativeStackNavigator();
const Tab = createNativeStackNavigator();
const Drawer = createNativeStackNavigator();

function HomeNestingScreen({navigation, route}: {navigation: any; route: any}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen
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
            headerTitle: props => <LogoTitle />,
            headerRight: () => <Button title="Info" color="#fff" />,
            headerBackTitle: 'Back',
            headerBackTitleStyle: {
              fontSize: 30,
            },
          }}
        />
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
    width: '80%',
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
