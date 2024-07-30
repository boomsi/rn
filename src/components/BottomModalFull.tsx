import {forwardRef} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {IProps} from 'react-native-modalize/lib/options';

interface IBProps extends IProps {
  children: React.ReactNode;
  height: number;
}

const BottomModalFull = forwardRef<any, IBProps>(
  ({children, height, ...attrs}, ref) => {
    return (
      <Modalize
        ref={ref}
        // snapPoint={300}
        // modalTopOffset={200}
        modalHeight={height}
        withHandle={false}
        handlePosition="inside"
        {...attrs}>
        {children}
      </Modalize>
    );
  },
);

const styles = StyleSheet.create({});

export default BottomModalFull;
