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
  ActionSheetIOS,
} from 'react-native';

import RemindBottomModal from './RemindBottomModal';
import ScheduleBottomModal from './ScheduleBottomModal';
import RepeatBottomModal from './RepeatBottomModal';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailsScreen = ({
  route: {params},
}: {
  route: RouteProp<{params: Task}, 'params'>;
}) => {
  const [currentDetail, setCurrentDetail] = useState<Task>(params);
  const remindSheetRef = useRef<BottomSheetModal>(null);
  const repeatSheetRef = useRef<BottomSheetModal>(null);
  const scheduleSheetRef = useRef<BottomSheetModal>(null);
  const [bottomModalType, setBottomModalType] = useState<
    keyof Pick<Task, 'remind' | 'repeat' | 'schedule'> | null
  >(null);

  const handleSheetChanges = useCallback((index: number) => {
    index === -1 && setBottomModalType(null);
  }, []);

  const onFinishedtask = () => {};

  const onOptionsHandle = (value: {time: string; date: string}) => {
    setCurrentDetail(old =>
      produce(old, draft => {
        draft[bottomModalType!] = {
          date: value.date,
          time: value.time,
        };
      }),
    );
    switch (bottomModalType) {
      case 'remind':
        remindSheetRef.current?.dismiss();
        break;
      case 'schedule':
        scheduleSheetRef.current?.dismiss();
        break;
      case 'repeat':
        repeatSheetRef.current?.dismiss();
        break;
    }
  };

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

  const onDeleteTaskHandle = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['取消', '删除'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          console.log('delete');
        }
      },
    );
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

      {/* remind */}
      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('remind')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="bell"
            size={20}
            color={currentDetail.remind?.date ? 'blue' : '#333'}
          />
          {currentDetail.remind?.date ? (
            <View>
              <Text style={publicStyles.active}>
                {currentDetail.remind.time}
              </Text>
              <Text style={publicStyles.active}>
                {currentDetail.remind.date}
              </Text>
            </View>
          ) : (
            <Text>提醒我</Text>
          )}
        </View>
      </TouchableHighlight>

      {/* schedule */}
      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('schedule')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="calendar"
            size={20}
            color={currentDetail.schedule?.date ? 'blue' : '#333'}
          />
          {currentDetail.schedule?.date ? (
            <View>
              <Text style={publicStyles.active}>
                {currentDetail.schedule.time}
              </Text>
              <Text style={publicStyles.active}>
                {currentDetail.schedule.date}
              </Text>
            </View>
          ) : (
            <Text>添加截止日期</Text>
          )}
        </View>
      </TouchableHighlight>

      {/* repeat */}
      <TouchableHighlight
        underlayColor="rgba(173, 216, 230, .3)"
        onPress={() => onPressHandle('repeat')}>
        <View style={[styles.item, publicStyles.inline]}>
          <MaterialIcon
            style={styles.mr8}
            name="repeat"
            size={20}
            color={currentDetail.repeat?.date ? 'blue' : '#333'}
          />
          {currentDetail.repeat?.date ? (
            <View>
              <Text style={publicStyles.active}>
                {currentDetail.repeat.time}
              </Text>
              <Text style={publicStyles.active}>
                {currentDetail.repeat.date}
              </Text>
            </View>
          ) : (
            <Text>重复</Text>
          )}
        </View>
      </TouchableHighlight>
      <Divider />

      {/* link */}
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
        <Text style={styles.footBarEmpty}> </Text>
        <Text style={styles.footBarText}>创建于6小时前</Text>
        <View style={[styles.footBarDelete, publicStyles.inline]}>
          <TouchableOpacity activeOpacity={0.5} onPress={onDeleteTaskHandle}>
            <MaterialIcon name="delete" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <RemindBottomModal
        ref={remindSheetRef}
        index={bottomModalType === 'remind' ? 0 : -1}
        onChange={handleSheetChanges}
        onOptionsHandle={onOptionsHandle}
      />

      <ScheduleBottomModal
        ref={scheduleSheetRef}
        index={bottomModalType === 'schedule' ? 0 : -1}
        onChange={handleSheetChanges}
        onOptionsHandle={onOptionsHandle}
      />

      <RepeatBottomModal
        ref={repeatSheetRef}
        index={bottomModalType === 'repeat' ? 0 : -1}
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  footBarEmpty: {
    flex: 2,
    flexShrink: 0,
  },
  footBarText: {
    color: '#999',
    flex: 6,
    textAlign: 'center',
  },
  footBarDelete: {
    flexShrink: 0,
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default DetailsScreen;
