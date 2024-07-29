import {Image} from '@rneui/base';
import publicStyles from 'app/styles';
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
      },
      {
        title: '将带有星标的任务移至顶部',
        key: 'moveTask',
      },
      {
        title: '播放完成提示音',
        key: 'playSound',
      },
      {
        title: '显示链接预览',
        key: 'showLink',
      },
      {
        title: '识别任务标题中的日期和时间',
        key: 'recognizeTask',
      },
      {
        title: '识别后从任务标题中删除日期和时间',
        key: 'autoRemove',
      },
      {
        title: 'Watch 应用设置',
        key: 'watchApp',
      },
      {
        title: 'Siri 快捷指令',
        key: 'siri',
      },
      {
        title: '应用角标',
        key: 'appBadge',
      },
      {
        title: '一周的开始',
        key: 'weekStart',
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
      },
      {
        title: '重要',
        key: 'important',
      },
      {
        title: '计划内',
        key: 'planed',
      },
      {
        title: '分配给我',
        key: 'assigned',
      },
      {
        title: '已完成',
        key: 'completed',
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
      },
      {
        title: '今天到期',
        key: 'today-expire',
      },
      {
        title: '已共享列表活动',
        key: 'shared-list',
      },
    ],
  },
];

const Settings = () => {
  const inserts = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.profile]}>
        <View style={styles.author}>
          <Image
            style={styles.authorPic}
            source={{uri: require('app/assets/images/2.png')}}
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
            账号管理
          </Text>
        </View>
      </View>
      {/* <View style={[styles.block]}>
        <SectionList
          sections={DATA}
          keyExtractor={item => item.title}
          renderSectionHeader={item => (
            <View style={styles.subtitle}>
              <Text>{item.section.title}</Text>
            </View>
          )}
          renderItem={item => (
            <TouchableHighlight underlayColor="#eee" onPress={() => {}}>
              <View style={styles.item}>
                <Text>{item.item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View> */}
      <View style={styles.footer}>
        <Text style={[publicStyles.textCenter]}>Microsoft To Do</Text>
        <Text style={[publicStyles.textCenter]}>@ 2023 Microsoft.</Text>
      </View>
      <View>
        <View style={styles.item}>
          <Text style={[publicStyles.textCenter, publicStyles.dangerText]}>
            注销
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={[publicStyles.textCenter, publicStyles.dangerText]}>
            删除账户
          </Text>
        </View>
      </View>
      <View style={{height: inserts.bottom, backgroundColor: '#eee'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
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
  },
  subtitle: {
    paddingVertical: 8,
    paddingTop: 24,
    paddingLeft: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  footer: {
    paddingVertical: 16,
    textAlign: 'center',
  },
});

export default Settings;
