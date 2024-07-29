import {StyleSheet} from 'react-native';

const publicStyles = StyleSheet.create({
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    color: 'blue'
  },
  dangerText: {
    color: 'red',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default publicStyles;
