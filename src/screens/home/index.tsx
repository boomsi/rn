import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MaterialIcon} from 'app/components/MaterialIcon';
import publicStyles from 'app/styles';
import {Avatar, Divider} from '@rneui/themed';

const menu = [
  {
    name: '我的一天',
    key: 'day',
    icon: 'weather-sunny',
    color: 'gray',
  },
  {
    name: '重要',
    key: 'important',
    icon: 'star-outline',
    color: 'red',
  },
  {
    name: '计划内',
    key: 'planned',
    icon: 'calendar',
    color: 'blue',
  },
  {
    name: '已分配给我',
    key: 'assigned',
    icon: 'human-greeting-variant',
    color: 'green',
  },
  {
    name: '标记的电子邮件',
    key: 'email',
    icon: 'email',
    color: 'orange',
  },
  {
    name: '任务',
    key: 'task',
    icon: 'format-list-bulleted-type',
    color: 'purple',
  },
];

const subMenu = [
  {
    name: '崛起计划',
    key: 'rise',
    icon: 'format-list-checkbox',
    color: 'purple',
  },
  {
    name: '无标题列表',
    key: 'untitled',
    icon: 'format-list-checkbox',
    color: 'purple',
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
        navigation.navigate('List', options);
        break;
      case 'rise':
      case 'untitled':
        navigation.navigate('List', options);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={[styles.header, publicStyles.inline]}>
          <View style={publicStyles.inline}>
            <Avatar
              rounded
              size={24}
              source={{uri: '../../../assets/images/nn.webp'}}
            />
            <Text style={styles.name}>Ma Bo</Text>
          </View>
          <MaterialIcon name="magnify" size={20} color="blue" />
        </View>

        <ScrollView>
          {menu.map(item => (
            <TouchableHighlight
              underlayColor="#ccc"
              onPress={() => jumpToDetails(item)}
              key={item.key}>
              <View style={[styles.listItem, publicStyles.inline]}>
                <MaterialIcon
                  style={styles.listItemIcon}
                  name={item.icon}
                  size={20}
                  color={item.color}
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          ))}
          <Divider style={styles.divider} />
          {subMenu.map(item => (
            <TouchableHighlight
              underlayColor="#ccc"
              onPress={() => jumpToDetails(item)}
              key={item.key}>
              <View style={[styles.listItem, publicStyles.inline]}>
                <MaterialIcon
                  style={styles.listItemIcon}
                  name={item.icon}
                  size={20}
                  color={item.color}
                />
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <View style={[styles.footerBar, publicStyles.inline]}>
          <View style={publicStyles.inline}>
            <MaterialIcon name="plus" size={20} color="blue" />
            <Text style={publicStyles.active}>新建列表</Text>
          </View>
          <MaterialIcon name="card-plus-outline" size={20} color="blue" />
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
    justifyContent: 'space-between',
    padding: 16,
  },
  name: {
    marginLeft: 4,
  },
  divider: {
    marginVertical: 16,
  },
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listItemIcon: {
    width: 20,
    marginRight: 8,
    textAlign: 'center',
  },
  footerBar: {
    position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 16,
    bottom: 0,
    left: 0,
    width: '100%',
    justifyContent: 'space-between',
  },
});
