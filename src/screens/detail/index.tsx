import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function DetailsScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
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
      {/* <Button
          title="Go to Home"
          onPress={() =>
            navigation.navigate({
              name: 'Home',
              params: {post: value},
              merge: true,
            })
          }
        /> */}
      {/* <Button
          title="Go to Details"
          onPress={() => navigation.push('Details')}
        /> */}
      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      {/* <Button title="Go to Top" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 200,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
