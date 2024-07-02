import BottomModal, {IBottomModalProps} from 'app/components/BottomModal';
import dayjs from 'dayjs';
import {forwardRef, useMemo} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const timeSelection = [
  {
    title: '今日晚些时候',
    key: 'now',
    time: dayjs().format('dddd mm:ss'),
    date: '今日',
  },
  {
    title: '明天',
    key: 'tomorrow',
    time: dayjs().format('dddd mm:ss'),
    date: '明天',
  },
  {
    title: '下周',
    key: 'week',
    time: dayjs().format('dddd mm:ss'),
    date: '下周',
  },
  {
    title: '选择日期和时间',
    key: 'custom',
    time: '23:59',
    date: '7/26',
  },
];

interface IProps extends Omit<IBottomModalProps, 'children'> {
  onOptionsHandle: (value: {time: string; date: string}) => void;
}

const RemindBottomModal: React.FC<IProps> = forwardRef(
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
          <Text style={styles.title}>提醒</Text>
          <View style={styles.contentContainer}>
            {timeSelection.map(item => (
              <TouchableHighlight
                underlayColor="#ccc"
                key={item.key}
                onPress={() => onOptionsHandle(item)}>
                <View style={styles.contentItem}>
                  <Text style={styles.contentItemText}>{item.title}</Text>
                  <Text
                    style={[styles.contentItemText, styles.contentItemOther]}>
                    {item.date} {item.time}
                  </Text>
                </View>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentItemText: {
    lineHeight: 50,
  },
  contentItemOther: {
    color: '#999',
  },
});

export default RemindBottomModal;
