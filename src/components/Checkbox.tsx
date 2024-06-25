import {CheckBox} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {MaterialIcon} from './MaterialIcon';

const CheckBoxSelf = ({
  onPress,
  checked,
  style,
}: {
  onPress: () => void;
  checked?: boolean;
  style?: object
}) => {
  return (
    <CheckBox
      containerStyle={[styles.checkbox, style]}
      checked={!!checked}
      onPress={onPress}
      checkedIcon={
        <MaterialIcon name="radiobox-marked" size={20} color="#38f" />
      }
      uncheckedIcon={
        <MaterialIcon name="radiobox-blank" size={20} color="#999" />
      }
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: 'transparent',
    padding: 0,
    // marginLeft: 0,
    // marginRight: 0
  },
});

export default CheckBoxSelf;
