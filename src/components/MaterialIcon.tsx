import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();

// reference https://static.enapter.com/rn/icons/material-community.html

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'] | number;
  name: string;
  color?: string;
  style?: any;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color, style}: IconProps) => (
  <MIcon
    name={name}
    size={typeof size === 'number' ? size : IconSizes[size]}
    color={color || '#fff'}
    style={style}
  />
);
