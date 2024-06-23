import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  List,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const menu = [
  {
    name: '我的一天',
    key: 'day',
  },
  {
    name: '重要',
    key: 'important',
  },
  {
    name: '计划内',
    key: 'planned',
  },
  {
    name: '已分配给我',
    key: 'assigned',
  },
  {
    name: '标记的电子邮件',
    key: 'email',
  },
  {
    name: '任务',
    key: 'task',
  },
];

const subMenu = [
  {
    name: '崛起计划',
    key: 'rise',
  },
  {
    name: '无标题列表',
    key: 'untitled',
  },
];

export default function HomeScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const jumpToDetails = (options: (typeof menu)[number]) => {
    switch (options.key) {
      case 'day':
      case 'important':
      case 'planned':
      case 'assigned':
      case 'email':
      case 'task':
        navigation.navigate('Details', options);
        break;
      case 'rise':
      case 'untitled':
        navigation.navigate('Details', options);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Avatar.Image
              size={24}
              source={require('../../assets/images/nn.webp')}
            />
            <Text style={styles.name}>Ma Bo</Text>
          </View>
          <Icon source="forward" size={20} />
        </View>

        <ScrollView contentContainerStyle={styles.list}>
          {menu.map(({name, key}) => (
            <TouchableHighlight
              underlayColor="#ccc"
              onPress={() => jumpToDetails({key, name})}>
              <Text style={styles.listItem} key={key}>
                {name}
              </Text>
            </TouchableHighlight>
          ))}
          <Divider style={styles.divider} />
          {subMenu.map(({name, key}) => (
            <TouchableHighlight
              underlayColor="#ccc"
              onPress={() => jumpToDetails({key, name})}>
              <Text style={styles.listItem} key={key}>
                {name}
              </Text>
            </TouchableHighlight>
          ))}
        </ScrollView>

        <View style={styles.footerBar}>
          <Text>新建列表</Text>
          <Icon source="forward" size={20} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  avatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 4,
  },
  divider: {
    marginVertical: 16,
  },
  list: {},
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  footerBar: {
    position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 16,
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
