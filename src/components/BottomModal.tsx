import {FC, forwardRef} from 'react';

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
  enableDynamicSizing: false,
  enablePanDownToClose: true,
  handleStyle: {backgroundColor: '#fff'},
  handleIndicatorStyle: {backgroundColor: '#38f'},
};

const BottomModal: FC<IBottomModalProps> = forwardRef(
  ({children, onChange, ...attrs}, ref) => {
    return (
      <BottomSheetModalProvider>
        {attrs.index! >= 0 && (
          <TouchableWithoutFeedback
            containerStyle={styles.fullTouch}
            onPress={(ref as any).current?.dismiss}>
            <View style={styles.bg}></View>
          </TouchableWithoutFeedback>
        )}
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

const styles = StyleSheet.create({
  fullTouch: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  bg: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
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
