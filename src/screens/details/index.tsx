import {RouteProp} from '@react-navigation/native';
import {Divider} from '@rneui/base';
import CheckBoxSelf from 'app/components/Checkbox';
import {MaterialIcon} from 'app/components/MaterialIcon';
import publicStyles from 'app/styles';
import {Task} from 'app/utils/schema';
import {produce} from 'immer';
import {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import RemindBottomModal from './RemindBottomModal';
import ScheduleBottomModal from './ScheduleBottomModal';
import RepeatBottomModal from './RepeatBottomModal';

const DetailsScreen = ({
  route: {params},
}: {
  route: RouteProp<{params: Task}, 'params'>;
}) => {
  const [currentDetail, setCurrentDetail] = useState<Task>(params);
  const remindSheetRef = useRef<BottomSheetModal>(null);
  const repeatSheetRef = useRef<BottomSheetModal>(null);
  const scheduleSheetRef = useRef<BottomSheetModal>(null);
  const [bottomModalType, setBottomModalType] = useState<string>('remind');

  const handleSheetChanges = useCallback((index: number) => {
    index === -1 && setBottomModalType('');
  }, []);

  const onFinishedtask = () => {};
  const onOptionsHandle = () => {};

  const onPressHandle = (type: string) => {
    switch (type) {
      case 'add':
        setCurrentDetail(old =>
          produce(old, draft => {
            draft.today = !draft.today;
          }),
        );
        break;
      case 'remind':
      case 'schedule':
      case 'repeat':
        scheduleSheetRef.current?.dismiss();
        repeatSheetRef.current?.dismiss();
        remindSheetRef.current?.dismiss();
        setBottomModalType(type);
        type === 'remind' && remindSheetRef.current!.present();
        type === 'schedule' && scheduleSheetRef.current!.present();
        type === 'repeat' && repeatSheetRef.current!.present();
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.step]}>
        <View style={[publicStyles.inline]}>
          <CheckBoxSelf onPress={onFinishedtask} />
          <Text>{currentDetail.content}</Text>
        </View>
      </View>

      <Divider />
      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('add')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="weather-sunny"
            size={20}
            color={currentDetail.today ? 'blue' : '#333'}
          />
          {currentDetail.today ? (
            <Text style={publicStyles.active}>已添加到“我的一天”</Text>
          ) : (
            <Text>添加到“我的一天”</Text>
          )}
        </View>
      </TouchableHighlight>
      <Divider />

      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('remind')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon style={styles.mr8} name="bell" size={20} color="#333" />
          <Text>提醒我</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('schedule')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="calendar"
            size={20}
            color="#333"
          />
          <Text>添加截止日期</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('repeat')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="repeat"
            size={20}
            color="#333"
          />
          <Text>重复</Text>
        </View>
      </TouchableHighlight>
      <Divider />

      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('upload')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="link-variant"
            size={20}
            color="#333"
          />
          <Text>添加文件</Text>
        </View>
      </TouchableHighlight>
      <Divider />

      <TextInput
        style={styles.remark}
        placeholder="添加备注"
        multiline
        placeholderTextColor="#999"
      />
      <Divider />

      <View style={[styles.footBar, publicStyles.inline]}>
        <Text style={styles.footBarText}>创建于6小时前</Text>
        <MaterialIcon
          style={styles.footBarDelete}
          name="delete"
          size={20}
          color="#333"
        />
      </View>

      <RemindBottomModal
        index={bottomModalType === 'remind' ? 0 : -1}
        ref={remindSheetRef}
        onChange={handleSheetChanges}
        onOptionsHandle={onOptionsHandle}
      />

      <ScheduleBottomModal
        index={bottomModalType === 'schedule' ? 0 : -1}
        ref={scheduleSheetRef}
        onChange={handleSheetChanges}
        onOptionsHandle={onOptionsHandle}
      />

      <RepeatBottomModal
        index={bottomModalType === 'repeat' ? 0 : -1}
        ref={repeatSheetRef}
        onChange={handleSheetChanges}
        onOptionsHandle={onOptionsHandle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  step: {
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  item: {
    height: 60,
    paddingHorizontal: 16,
  },
  mr8: {
    marginRight: 8,
  },
  remark: {
    padding: 16,
    height: 100,
  },
  footBar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    height: 40,
  },
  footBarText: {
    width: '100%',
    textAlign: 'center',
    color: '#999',
  },
  footBarDelete: {
    position: 'absolute',
    right: 20,
    bottom: '50%',
    transform: [{translateY: 10}],
  },
});

export default DetailsScreen;
