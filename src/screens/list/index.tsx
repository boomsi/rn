import {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Text,
  SectionList,
  TouchableWithoutFeedback,
} from 'react-native';

import {v4 as uuidv4} from 'uuid';
import {produce} from 'immer';
import {MaterialIcon} from 'app/components/MaterialIcon';
import publicStyles from 'app/styles';
import dayjs from 'dayjs';
import CheckBoxSelf from 'app/components/Checkbox';
import {Task} from 'app/utils/schema';
import {NavigationProp} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ListScreen({
  navigation,
  route,
}: {
  navigation: NavigationProp<{name: string; key: string}>;
  route: any;
}) {
  const inserts = useSafeAreaInsets();
  const [currentValue, setCurrentValue] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [collapsed, setCollapsed] = useState<{
    [key: number]: boolean;
  }>({
    1: false,
    2: false,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRight,
    });
  }, []);

  const jumpToList = () => {
    navigation.goBack();
  };

  const onCreatTask = () => {
    setTaskList(old =>
      produce(old, draft => {
        draft.push(new Task(uuidv4(), currentValue));
      }),
    );
    setCurrentValue('');
  };

  const onCurrentValueChange = (v: string) => {
    setCurrentValue(v);
  };

  const onUpdateTask = (id: string, original: Task) => {
    setTaskList(old =>
      produce(old, draft => {
        const index = draft.findIndex(item => item.id === id);
        draft[index].status = original.status === 1 ? 2 : 1;
      }),
    );
  };

  const onCollapsedChange = (key: number) => {
    setCollapsed(old => {
      return {
        ...old,
        [key]: !old[key],
      };
    });
  };

  const onJumpToDetails = (item: Task) => {
    navigation.navigate('Details' as any, {...item});
  };

  const headerRight = useMemo(() => {
    return (
      <View style={publicStyles.inline}>
        <MaterialIcon
          style={styles.mr8}
          name="lightbulb-on-outline"
          size={20}
          color="#000"
        />
        <MaterialIcon name="dots-horizontal" size={20} color="#000" />
      </View>
    );
  }, []);

  const listData = useMemo(() => {
    return taskList.reduce(
      (acc, cur) => {
        if (cur.status === 1 && !collapsed[1]) {
          acc[0].data.push(cur);
        } else if (cur.status === 2 && !collapsed[2]) {
          acc[1].data.push(cur);
        }
        return acc;
      },
      [
        {title: '未完成', status: 1, data: [] as Task[]},
        {title: '已完成', status: 2, data: [] as Task[]},
      ],
    );
  }, [taskList, collapsed]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: inserts.bottom,
        },
      ]}>
      <View style={styles.content}>
        <Text style={styles.title}>{route.params.name}</Text>
        <Text style={styles.subtitle}>{dayjs().format('MM-DD dddd')}</Text>
        <SectionList
          style={styles.list}
          sections={listData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => onJumpToDetails(item)}>
              <View
                style={[styles.listItem, publicStyles.inline]}
                key={item.id}>
                <CheckBoxSelf
                  style={styles.checkbox}
                  checked={item.status === 2}
                  onPress={() => onUpdateTask(item.id, item)}
                />
                <Text>{item.content}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          renderSectionHeader={({section}) => (
            <TouchableWithoutFeedback
              onPress={() => onCollapsedChange(section.status)}>
              <View style={[styles.listTitle, publicStyles.inline]}>
                <MaterialIcon
                  name={
                    collapsed[section.status] ? 'chevron-right' : 'chevron-down'
                  }
                  size={20}
                  color="#fff"
                />
                <Text style={styles.listTitleText}>{section.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
        {/* <FlatList
            data={taskList.filter(({status}) => status === 1)}
            style={styles.list}
            renderItem={({item}) => (
              <View
                style={[styles.listItem, publicStyles.inline]}
                key={item.id}>
                <CheckBoxSelf onPress={() => onUpdateTask(item.id)} />
                <Text>{item.content}</Text>
              </View>
            )}
          /> */}
      </View>
      <View
        style={[
          styles.footerBar,
          {
            bottom: inserts.bottom,
          },
        ]}>
        <View style={[styles.foot, publicStyles.inline]}>
          <MaterialIcon name="plus" size={20} color="#fff" />
          <TextInput
            value={currentValue}
            style={styles.addTaskInput}
            onChangeText={onCurrentValueChange}
            placeholder="添加任务"
            placeholderTextColor="#fff"
            onSubmitEditing={onCreatTask}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(50, 180, 200, 1)',
    position: 'relative',
    paddingTop: 8,
  },

  inline: {
    height: '100%',
    width: 80,
  },
  content: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  list: {
    height: Dimensions.get('window').height - 250,
  },
  listTitle: {
    marginVertical: 8,
    padding: 8,
    width: 90,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 4,
  },
  listTitleText: {
    color: '#fff',
  },
  checkbox: {
    marginLeft: 8,
    marginRight: 9,
  },
  listItem: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    marginVertical: 4,
    marginHorizontal: 0,
    borderRadius: 6,
    color: '#fff',
  },
  footerBar: {
    position: 'absolute',
    // bottom: 8,
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 8,
  },
  foot: {
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 4,
  },
  addTaskInput: {
    height: 40,
    paddingHorizontal: 8,
    flex: 1,
    color: '#fff',
  },
  mr8: {
    marginRight: 8,
  },
});
