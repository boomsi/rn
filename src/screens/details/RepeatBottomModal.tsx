import BottomModal, {IBottomModalProps} from 'app/components/BottomModal';
import dayjs from 'dayjs';
import {forwardRef} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const repeatSelection = [
  {
    title: '每天',
    key: 'day',
    date: 'day',
    time: 'day',
  },
  {
    title: '每周',
    key: 'week',
    date: 'week',
    time: 'week',
  },
  {
    title: '工作日',
    key: 'workday',
    date: 'workday',
    time: 'workday',
  },
  {
    title: '每月',
    key: 'month',
    date: 'month',
    time: 'month',
  },
  {
    title: '每年',
    key: 'year',
    date: 'year',
    time: 'year',
  },
  // {
  //   title: '自定义',
  //   key: 'custom',
  //   time: '22',
  //   date: '22',
  // },
];

interface IProps extends Omit<IBottomModalProps, 'children'> {
  onOptionsHandle: (key: {time: string; date: string}) => void;
}

const RepeatBottomModal: React.FC<IProps> = forwardRef(
  ({onOptionsHandle, ...props}, ref) => {
    return (
      <BottomModal
        snapPoints={[400]}
        enableDynamicSizing
        enablePanDownToClose
        ref={ref}
        {...props}>
        <>
          <Text style={styles.title}>重复</Text>
          <View style={styles.contentContainer}>
            {repeatSelection.map(item => (
              <TouchableHighlight
                underlayColor="#ccc"
                key={item.key}
                onPress={() => onOptionsHandle(item)}>
                <Text style={styles.contentItem}>{item.title}</Text>
              </TouchableHighlight>
            ))}
          </View>
        </>
      </BottomModal>
    );
  },
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    paddingVertical: 8,
  },
  contentItem: {
    paddingHorizontal: 16,
    height: 50,
    lineHeight: 50,
  },
});

export default RepeatBottomModal;
