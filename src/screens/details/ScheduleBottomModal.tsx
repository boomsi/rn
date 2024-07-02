import BottomModal, {IBottomModalProps} from 'app/components/BottomModal';
import dayjs from 'dayjs';
import {forwardRef, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {TabView} from '@rneui/themed';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {MaterialIcon} from 'app/components/MaterialIcon';
import publicStyles from 'app/styles';
import {produce} from 'immer';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  },
];

interface IProps extends Omit<IBottomModalProps, 'children'> {
  onOptionsHandle: (value: {time: string; date: string}) => void;
}

const ScheduleBottomModal: React.FC<IProps> = forwardRef(
  ({onOptionsHandle, ...props}, ref) => {
    const [index, setIndex] = useState<number>(0);
    const [height, setHeight] = useState<number>(300);
    const [value, setValue] = useState<Record<'time' | 'date', string>>({
      time: new Date().toTimeString(),
      date: new Date().toDateString(),
    });

    const onSelectOptions = (item: (typeof timeSelection)[number]) => {
      if (item.key === 'custom') {
        onIndexChange();
      } else {
        onOptionsHandle(item as Required<(typeof timeSelection)[number]>);
      }
    };

    const onIndexChange = () => {
      setIndex(index + 1);
      setHeight(index + 1 === 1 ? 450 : 300);
    };

    const onDateTimeChange = (
      type: 'date' | 'time',
      date: Date | undefined,
    ) => {
      setValue(old =>
        produce(old, draft => {
          if (type === 'date') {
            draft.date = date!.toDateString();
          } else {
            draft.time = date!.toTimeString();
          }
        }),
      );
    };

    const coConfirm = () => {
      onOptionsHandle(value);
      (ref as any).current.dismiss();
    };

    const onClose = () => {
      setIndex(0);
      setHeight(300);
    };

    const tabFirst = useMemo(() => {
      return (
        <View style={styles.contentContainer}>
          {timeSelection.map(item => (
            <TouchableHighlight
              underlayColor="#ccc"
              key={item.key}
              onPress={() => onSelectOptions(item)}>
              <View style={styles.contentItem}>
                <Text style={styles.contentItemText}>{item.title}</Text>
                <Text style={[styles.contentItemText, styles.contentItemOther]}>
                  {item.date} {item.time}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      );
    }, [index, onOptionsHandle]);

    const tabSecond = useMemo(() => {
      return (
        <View>
          <RNDateTimePicker
            locale="zh"
            mode="date"
            display="inline"
            value={new Date()}
            onChange={(_, date) => onDateTimeChange('date', date)}
          />
          <TouchableHighlight
            underlayColor="#ccc"
            onPress={onIndexChange}
            style={{marginVertical: 8}}>
            <View style={[styles.selectTime, publicStyles.inline]}>
              <Text>选择时间</Text>
              <MaterialIcon name="chevron-right" size={20} color="#000" />
            </View>
          </TouchableHighlight>
        </View>
      );
    }, [index, onOptionsHandle]);

    const tabThird = useMemo(() => {
      return (
        <RNDateTimePicker
          locale="zh"
          mode="time"
          is24Hour
          display="spinner"
          value={new Date()}
          onChange={(_, date) => onDateTimeChange('time', date)}
        />
      );
    }, [index, onOptionsHandle]);

    return (
      <BottomModal
        snapPoints={[height]}
        contentHeight={height}
        // enableDynamicSizing
        enablePanDownToClose
        onDismiss={onClose}
        ref={ref}
        {...props}>
        <>
          <View style={[styles.modalHeader, publicStyles.inline]}>
            <Text> </Text>
            <Text style={styles.title}>截止</Text>
            <TouchableOpacity onPress={coConfirm} activeOpacity={0.5}>
              <Text style={styles.confirmBtn}>设置</Text>
            </TouchableOpacity>
          </View>
          <TabView
            containerStyle={{
              height: height - 50,
            }}
            value={index}
            onChange={setIndex}
            animationType="spring">
            <TabView.Item style={styles.tabItem}>{tabFirst}</TabView.Item>
            <TabView.Item style={styles.tabItem}>{tabSecond}</TabView.Item>
            <TabView.Item style={styles.tabItem}>{tabThird}</TabView.Item>
          </TabView>
        </>
      </BottomModal>
    );
  },
);

const styles = StyleSheet.create({
  modalHeader: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  confirmBtn: {
    color: '#38f',
  },
  tabItem: {
    height: 300,
    width: '100%',
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
  selectTime: {
    height: 50,
    lineHeight: 50,
    paddingHorizontal: 16,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
});

export default ScheduleBottomModal;
