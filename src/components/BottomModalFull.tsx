import publicStyles from 'app/styles';
import {forwardRef} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import {IProps} from 'react-native-modalize/lib/options';

interface IBProps extends IProps {
  children: React.ReactNode;
}

const BottomModalFull = forwardRef<any, IBProps>(
  ({children, ...attrs}, ref) => {
    const {height} = useWindowDimensions();

    return (
      <Modalize
        ref={ref}
        // snapPoint={300}
        // modalTopOffset={200}
        modalHeight={height - 100}
        withHandle={false}
        handlePosition="inside"
        {...attrs}>
        {children}
      </Modalize>
    );
  },
);

const styles = StyleSheet.create({
  
});

export default BottomModalFull;
