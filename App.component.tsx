/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = React.useState('23331');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Input here"
          value={text}
          multiline
          numberOfLines={4}
          onChangeText={text => {
            setText(text);
          }}></TextInput>
      </View>
      <View style={styles.block}>
        <View style={{flex: 1}}>
          <Text style={styles.platform}>
            {Platform.OS} - {Platform.Version}
          </Text>
        </View>
      </View>

      {/* <ScrollView>
        {Array.from({length: 30}).map((_, index) => (
          <Image source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            width: 30,
            height: 30
          }} />
        ))}
      </ScrollView> */}

      {/* <FlatList
        data={Array.from({length: 100}).map((_, index) => 'Line ' + index)}
        renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    padding: 16,
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
