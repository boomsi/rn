import React, {Fragment, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  View,
  Platform,
  StyleSheet,
} from 'react-native';

import Home from './src/screens/home';

const HelloWorldApp = () => {
  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView>
      <Home />
      {/* <View style={{padding: 8}}>
        <Text style={style.aa}>2333</Text>
        <TextInput
          style={{
            height: 60,
            borderColor: '#38f',
            borderWidth: 1,
            padding: 8,
          }}
          value={text}
          onChangeText={v => {
            setText(v);
          }}
          onSubmitEditing={v => {
            console.log(v);
          }}></TextInput>

        <View>
          {Platform.OS === 'ios' ? <Text>IOS</Text> : <Text>Android</Text>}
          {Platform.select({
            ios: <Text>IOS</Text>,
            android: <Text>Android</Text>,
          })}
          <Text>{Platform.Version}</Text>
          <Text>{text}</Text>
        </View>
      </View> */}

      {/* <ScrollView pagingEnabled>
        {new Array(10).fill(0).map((v, i) => (
          <Fragment key={v + i}>
            <Text style={{fontSize: 108}}>{i}</Text>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                width: 100,
                height: 100,
              }}
            />
          </Fragment>
        ))}
      </ScrollView> */}

      {/* <View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <Text style={{fontSize: 108}}>{item.key}</Text>
          )}></FlatList>
      </View> */}

      {/* <View>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => (
            <Text
              style={{
                fontSize: 60,
              }}>
              {item}
            </Text>
          )}
          renderSectionHeader={({section}) => (
            <Text
              style={{
                backgroundColor: '#38f',
                padding: 8,
                fontSize: 20,
              }}>
              {section.title}
            </Text>
          )}></SectionList>
      </View> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  aa: {
    color: '#f40',
  },
});

export default HelloWorldApp;
