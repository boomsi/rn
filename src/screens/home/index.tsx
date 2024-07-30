import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {MaterialIcon} from 'app/components/MaterialIcon';
import publicStyles from 'app/styles';
import {Avatar, Divider} from '@rneui/themed';
import BottomModalFull from 'app/components/BottomModalFull';
import {Modalize} from 'react-native-modalize';
import {useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Settings from '../settings';

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
  const inserts = useSafeAreaInsets();
  const area = useWindowDimensions();
  const modallizeRef = useRef<Modalize>(null);

  useEffect(() => {
    onOpenProfile();
  }, []);

  const onOpenProfile = () => {
    modallizeRef.current?.open();
  };

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
    <View
      style={[
        styles.container,
        {
          paddingTop: inserts.top,
          paddingBottom: inserts.bottom,
        },
      ]}>
      <View style={[styles.header, publicStyles.inline]}>
        <TouchableOpacity onPress={onOpenProfile}>
          <View style={publicStyles.inline}>
            <Avatar
              rounded
              size={24}
              source={{uri: require('app/assets/images/nn.webp')}}
            />
            <Text style={styles.name}>Ma Bo</Text>
          </View>
        </TouchableOpacity>
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

      <BottomModalFull
        height={area.height - 100}
        ref={modallizeRef}
        HeaderComponent={
          <View style={styles.settingsHeader}>
            <Text style={styles.settingsHeaderText}>设置</Text>
            <TouchableOpacity onPress={() => modallizeRef.current?.close()}>
              <Text style={[styles.settingsHeaderclose, publicStyles.active]}>
                关闭
              </Text>
            </TouchableOpacity>
          </View>
        }>
        <Settings height={area.height} />
      </BottomModalFull>

      <View
        style={[
          styles.footerBar,
          publicStyles.inline,
          {
            bottom: inserts.bottom,
          },
        ]}>
        <View style={publicStyles.inline}>
          <MaterialIcon name="plus" size={20} color="blue" />
          <Text style={publicStyles.active}>新建列表</Text>
        </View>
        <MaterialIcon name="card-plus-outline" size={20} color="blue" />
      </View>
    </View>
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

  settingsHeader: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'relative',
  },
  settingsHeaderText: {
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  settingsHeaderclose: {
    position: 'absolute',
    right: 16,
    top: -50,
    lineHeight: 50
  },
});
