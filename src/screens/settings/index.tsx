import {Image, Tab, TabView} from '@rneui/themed';
import {MaterialIcon} from 'app/components/MaterialIcon';
import SwitchSelf from 'app/components/Switch';
import publicStyles from 'app/styles';
import {FC, useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DATA = [
  {
    title: '常规',
    key: 'general',
    data: [
      {
        title: '在顶部添加新任务',
        key: 'addTask',
        type: 'switch',
      },
      {
        title: '将带有星标的任务移至顶部',
        key: 'moveTask',
        type: 'switch',
      },
      {
        title: '播放完成提示音',
        key: 'playSound',
        type: 'switch',
      },
      {
        title: '显示链接预览',
        type: 'switch',
        key: 'showLink',
      },
      {
        title: '识别任务标题中的日期和时间',
        type: 'switch',
        key: 'recognizeTask',
      },
      {
        title: '识别后从任务标题中删除日期和时间',
        type: 'switch',
        key: 'autoRemove',
      },
      {
        title: 'Watch 应用设置',
        key: 'watchApp',
        type: 'more',
      },
      {
        title: 'Siri 快捷指令',
        type: 'more',
        key: 'siri',
      },
      {
        title: '应用角标',
        type: 'more',
        key: 'appBadge',
      },
      {
        title: '一周的开始',
        key: 'weekStart',
        type: 'more',
      },
    ],
  },
  {
    title: '智能列表',
    key: 'smartList',
    data: [
      {
        title: '全部',
        key: 'all',
        type: 'switch',
      },
      {
        title: '重要',
        type: 'switch',
        key: 'important',
      },
      {
        title: '计划内',
        type: 'switch',
        key: 'planed',
      },
      {
        title: '分配给我',
        type: 'switch',
        key: 'assigned',
      },
      {
        title: '已完成',
        key: 'completed',
        type: 'switch',
      },
    ],
  },
  {
    title: '通知',
    key: 'notification',
    data: [
      {
        title: '提醒',
        key: 'notify',
        type: 'switch',
      },
      {
        title: '今天到期',
        type: 'switch',
        key: 'today-expire',
      },
      {
        title: '今天到期时间通知',
        type: 'text',
        key: 'today-expire-time',
        addition: '08:00',
      },
      {
        title: '已共享列表活动',
        type: 'switch',
        key: 'shared-list',
      },
    ],
  },
  {
    title: '关于',
    key: 'about',
    data: [
      {
        title: '版本',
        key: 'version',
        type: 'text',
        addition: '0.0.0, build <hash>',
      },
      {
        title: '隐私和Cookie',
        key: 'privacy',
        type: 'more',
      },
      {
        title: '导出你的信息',
        key: 'export',
        type: 'more',
      },
      {
        title: '软件许可条款',
        key: 'license',
        type: 'more',
      },
      {
        title: '第三方通知',
        key: 'third-party',
        type: 'more',
      },
    ],
  },
];

type IItem = (typeof DATA)[number]['data'][number];

interface IProps {
  height: number;
}

const Settings: FC<IProps> = ({height}) => {
  const inserts = useSafeAreaInsets();
  const [tabIndex, setTabIndex] = useState(0);

  const renderItem = (type: IItem['type'], item: IItem) => {
    switch (type) {
      case 'switch':
        return (
          <View style={[styles.item, publicStyles.inline]}>
            <Text style={styles.itemText}>{item.title}</Text>
            <SwitchSelf />
          </View>
        );
      case 'more':
        return (
          <TouchableHighlight underlayColor="#aaa" onPress={() => {}}>
            <View style={[styles.item, publicStyles.inline]}>
              <Text style={styles.itemText}>{item.title}</Text>
              <MaterialIcon name="chevron-right" size={30} color="#ccc" />
            </View>
          </TouchableHighlight>
        );
      case 'text':
        return (
          <View style={[styles.item, publicStyles.inline]}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.grey}>{item.addition}</Text>
          </View>
        );
      default:
        return <View></View>;
    }
  };

  return (
    <View style={[styles.container, {height}]}>
      <TabView value={tabIndex} onChange={setTabIndex}>
        <TabView.Item style={[styles.tabItem]}>
          <View style={styles.container}>
            <View style={[styles.profile]}>
              <View style={styles.author}>
                <Image
                  style={styles.authorPic}
                  // source={{uri: require('./imgs/nn.webp')}}
                  source={{uri: require('./imgs/2.png')}}
                />
              </View>
              <View>
                <Text style={styles.profileName}>Name</Text>
              </View>
              <View>
                <Text style={styles.profileAddress}>Address@email.com</Text>
              </View>
              <View style={styles.profileManagerBtn}>
                <Text style={[publicStyles.textCenter, publicStyles.active]}>
                  管理账户
                </Text>
              </View>
            </View>
            <View style={[styles.block]}>
              <SectionList
                sections={DATA}
                keyExtractor={item => item.title}
                renderSectionHeader={item => (
                  <View style={styles.subtitle}>
                    <Text>{item.section.title}</Text>
                  </View>
                )}
                renderItem={item => renderItem(item.item.type, item.item)}
              />
            </View>
            <View style={styles.footer}>
              <Text style={[publicStyles.textCenter, styles.grey]}>
                Microsoft To Do
              </Text>
              <Text style={[publicStyles.textCenter, styles.grey]}>
                @ 2023 Microsoft.
              </Text>
            </View>
            <View>
              <View style={styles.item}>
                <Text
                  style={[
                    publicStyles.textCenter,
                    publicStyles.dangerText,
                    styles.itemText,
                  ]}>
                  注销
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={[
                    publicStyles.textCenter,
                    publicStyles.dangerText,
                    styles.itemText,
                  ]}>
                  删除账户
                </Text>
              </View>
            </View>
            <View
              style={{height: inserts.bottom, backgroundColor: '#eee'}}></View>
          </View>
        </TabView.Item>
        <TabView.Item>
          <View style={styles.container}>
            <Text>2333</Text>
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  tabItem: {
    width: '100%',
  },
  profile: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 8,
  },
  author: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 50,
    borderColor: '#eee',
    borderWidth: 1,
  },
  authorPic: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  profileName: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 8,
  },
  profileAddress: {
    textAlign: 'center',
  },
  profileManagerBtn: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
    marginTop: 8,
  },
  block: {
    paddingTop: 16,
    flex: 1
  },
  subtitle: {
    paddingVertical: 8,
    paddingTop: 24,
    paddingLeft: 16,
  },
  item: {
    height: 40,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  itemText: {
    lineHeight: 40,
  },
  footer: {
    paddingVertical: 16,
    textAlign: 'center',
  },
  grey: {
    color: 'grey',
  },
});

export default Settings;
