import {useState} from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DetailsScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const jumpToList = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.more}>
            <Icon source="plus" size={20} color="#000" />
            <Text onPress={jumpToList}>列表</Text>
          </View>
          <View style={styles.more}>
            <Icon source="plus" size={20} color="#000" />
            <Icon source="plus" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{route.params.name}</Text>
          <Text style={styles.subtitle}>6月23日 星期日</Text>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>

        <View style={styles.footerBar}>
          <View style={styles.foot}>
            <Icon source="plus" size={20} color="#000" />
            <TextInput style={styles.addTaskInput} placeholder="添加任务" />
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
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 4,
  },
  addTaskInput: {
    height: 40,
    paddingHorizontal: 8,
  },
});
