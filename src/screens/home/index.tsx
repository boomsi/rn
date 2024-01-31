import {
  Alert,
  Button,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './style';

const Home = () => {
  return (
    <View>
      <Text>2333</Text>
      <Image style={styles.img} source={require('./img/response.webp')} />
      <Button
        title="CLICK"
        color="#f40"
        onPress={() => {
          Alert.alert('click');
        }}></Button>

      <TouchableHighlight
        style={{
          borderColor: '#f40',
          borderWidth: 1,
          borderRadius: 4,
          width: 80,
          height: 30,
        }}
        onPress={() => {
          console.log('ontouch');
        }}
        underlayColor="#f40">
        <Text
          style={{
            lineHeight: 30,
            textAlign: 'center',
          }}>
          Touchable
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          borderColor: '#f40',
          borderWidth: 1,
          borderRadius: 4,
          width: 80,
          height: 30,
        }}
        underlayColor="#f40"
        onPress={() => {
          console.log('ontouch');
        }}>
        <Text
          style={{
            lineHeight: 30,
            textAlign: 'center',
          }}>
          Highlight
        </Text>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => {
          console.log('ontouch');
        }}>
        <Text
          style={{
            lineHeight: 30,
            textAlign: 'center',
          }}>
          Highlight
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
