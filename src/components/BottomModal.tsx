import {FC, forwardRef} from 'react';

import {Text} from '@rneui/base';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';

export interface IBottomModalProps extends BottomSheetModalProps {
  children: React.ReactNode;
  ref?: any;
}

const defaultProps = {
  index: 1,
  snapPoints: [300],
  enableDynamicSizing: true,
  enablePanDownToClose: true,
  handleStyle: {backgroundColor: '#fff'},
  handleIndicatorStyle: {backgroundColor: '#38f'},
};

const BottomModal: FC<IBottomModalProps> = forwardRef(
  ({children, onChange, ...attrs}, ref) => {
    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          style={styles.sheetContainer}
          ref={ref}
          {...Object.assign({}, defaultProps, attrs)}
          onChange={onChange}
          handleStyle={{backgroundColor: '#fff'}}
          handleIndicatorStyle={{backgroundColor: '#38f'}}>
          <BottomSheetView>{children}</BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

console.log(Dimensions.get('window').height);

const styles = StyleSheet.create({
  sheetContainer: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.25,
  },
});
export default BottomModal;
