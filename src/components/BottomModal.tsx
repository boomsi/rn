import {FC} from 'react';
import BottomSheet, {
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Text} from '@rneui/base';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export interface IProps extends BottomSheetProps {
    children: React.ReactNode;
}

const defaultProps = {
  index: -1,
  snapPoints: [300],
  // enableDynamicSizing: true,
  enablePanDownToClose: true,
  handleStyle: {backgroundColor: '#fff'},
  handleIndicatorStyle: {backgroundColor: '#38f'},
};

const BottomModal: FC<IProps> = ({children, onChange, ...attrs}) => {
  return (
    <>
      {/* <TouchableWithoutFeedback onPress={() => onChange?.(-1)}> */}
      <View style={[styles.mask, attrs.index === -1 && styles.maskHide]}></View>
      {/* </TouchableWithoutFeedback> */}
      <BottomSheet
        // ref={bottomSheetRef}
        {...Object.assign({}, defaultProps, attrs)}
        snapPoints={[300]}
        onChange={onChange}
        // enableDynamicSizing
        enablePanDownToClose
        handleStyle={{backgroundColor: '#fff'}}
        handleIndicatorStyle={{backgroundColor: '#38f'}}>
        <BottomSheetView>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

console.log(Dimensions.get('window').height);

const styles = StyleSheet.create({
  mask: {
    backgroundColor: 'rgba(0,0,0,.3)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  maskHide: {
    display: 'none',
  },
});
export default BottomModal;
