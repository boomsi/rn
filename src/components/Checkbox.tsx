import {CheckBox} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {MaterialIcon} from './MaterialIcon';

const CheckBoxSelf = ({
  onPress,
  checked,
}: {
  onPress: () => void;
  checked?: boolean;
}) => {
  return (
    <CheckBox
      containerStyle={styles.checkbox}
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
  },
});

export default CheckBoxSelf;
