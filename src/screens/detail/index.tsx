import {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {v4 as uuidv4} from 'uuid';
import {produce} from 'immer';
import {MaterialIcon} from '../../../components/MaterialIcon';
import publicStyles from 'app/styles';

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
    setCurrentValue('');
  };

  const onCurrentValueChange = (v: string) => {
    setCurrentValue(v);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={publicStyles.inline}>
            <TouchableOpacity onPress={jumpToList} style={publicStyles.inline}>
              <MaterialIcon name="chevron-left" size={20} color="#000" />
              <Text>列表</Text>
            </TouchableOpacity>
          </View>
          <View style={publicStyles.inline}>
            <MaterialIcon
              style={styles.mr8}
              name="lightbulb-on-outline"
              size={20}
              color="#000"
            />
            <MaterialIcon name="motion-outline" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.subtitle}>6月23日 星期日</Text>
          <FlatList
            data={taskList}
            style={styles.list}
            renderItem={({item}) => (
              <View style={styles.listItem} key={item.id}>
                <Text>{item.content}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.footerBar}>
          <View style={[styles.foot, publicStyles.inline]}>
            <MaterialIcon name="plus" size={20} color="blue" />
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

  content: {
    // flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
  list: {
    height: Dimensions.get('window').height - 250,
  },
  listItem: {
    padding: 16,
    backgroundColor: 'rgba(100, 100, 100, .8)',
    margin: 4,
    borderRadius: 6,
    color: '#fff',
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
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 4,
  },
  addTaskInput: {
    height: 40,
    paddingHorizontal: 8,
    flex: 1,
  },
  mr8: {
    marginRight: 8,
  },
});
