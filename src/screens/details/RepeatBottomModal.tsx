import BottomModal, {IBottomModalProps} from 'app/components/BottomModal';
import dayjs from 'dayjs';
import {forwardRef} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const repeatSelection = [
  {
    title: '每天',
    key: 'day',
    date: '每天',
    time: dayjs().format('HH:mm'),
  },
  {
    title: '每周',
    key: 'week',
    date: '每周',
    time: dayjs().format('dddd'),
  },
  {
    title: '工作日',
    key: 'workday',
    date: '每周',
    time: '工作日',
  },
  {
    title: '每月',
    key: 'month',
    date: '每月',
    time: '*-' + dayjs().format('DD HH:mm'),
  },
  {
    title: '每年',
    key: 'year',
    date: '每年',
    time: dayjs().format('MM-DD HH:mm'),
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
        snapPoints={[350]}
        contentHeight={350}
        // enableDynamicSizing
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
