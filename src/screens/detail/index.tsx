import {useState} from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';
import {produce} from 'immer';
import {MaterialIcon} from '../../../components/Icon';

export type ITask = {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export default function DetailsScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const jumpToList = () => {
    navigation.goBack();
  };

  const onCreatTask = () => {
    setTaskList(old =>
      produce(old, draft => {
        draft.push({
          id: uuidv4(),
          content: currentValue,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }),
    );
  };

  const onCurrentValueChange = (v: string) => {
    setCurrentValue(v);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.more}>
            <MaterialIcon name="plus" size={20} color="#000" />
            <Text onPress={jumpToList}>列表</Text>
          </View>
          <View style={styles.more}>
            <MaterialIcon name="plus" size={20} color="#000" />
            <MaterialIcon name="plus" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.subtitle}>6月23日 星期日</Text>
          <FlatList
            data={taskList}
            renderItem={({item}) => <Text key={item.id}>{item.content}</Text>}
          />
        </View>

        <View style={styles.footerBar}>
          <View style={styles.foot}>
            <MaterialIcon name="plus" size={20} color="#000" />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  more: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
  },
  content: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  footerBar: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
    paddingHorizontal: 8,
  },
  foot: {
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 4,
  },
  addTaskInput: {
    height: 40,
    paddingHorizontal: 8,
    flex: 1,
  },
});
