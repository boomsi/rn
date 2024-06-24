import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {IconSizes, IconProps} from './MaterialIcon';
import {Text} from 'react-native';

FontAwesomeIcon.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <FontAwesomeIcon.Button
    onPress={onPress}
    name={name}
    size={typeof size === 'number' ? size : IconSizes[size]}
    color={color}>
    <Text>{text}</Text>
  </FontAwesomeIcon.Button>
);
