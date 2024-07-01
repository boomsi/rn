import BottomModal, {IBottomModalProps} from 'app/components/BottomModal';
import dayjs from 'dayjs';
import {forwardRef, useMemo} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const timeSelection = [
  {
    title: '今日晚些时候',
    key: 'now',
    value: dayjs().format('dddd mm:ss'),
  },
  {
    title: '明天',
    key: 'tomorrow',
    value: dayjs().format('dddd mm:ss'),
  },
  {
    title: '下周',
    key: 'week',
    value: dayjs().format('dddd mm:ss'),
  },
  {
    title: '选择日期和时间',
    key: 'custom',
  },
];

interface IProps extends Omit<IBottomModalProps, 'children'> {
  onOptionsHandle: (key: string) => void;
}

const ScheduleBottomModal: React.FC<IProps> = forwardRef(
  ({onOptionsHandle, ...props}, ref) => {
    return (
      <BottomModal
        // snapPoints={[300]}
        contentHeight={300}
        enableDynamicSizing
        enablePanDownToClose
        ref={ref}
        {...props}>
        <>
          <Text style={styles.title}>截止</Text>
          <View style={styles.contentContainer}>
            {timeSelection.map(item => (
              <TouchableHighlight
                underlayColor="#ccc"
                key={item.key}
                onPress={() => onOptionsHandle(item.key)}>
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
    lineHeight: 50,
    height: 50,
  },
});

export default ScheduleBottomModal;
