import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const ExampleScreen = () => {
  const inserts = useSafeAreaInsets();
  // renders

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: -inserts.top,
          // paddingBottom: inserts.bottom,
        },
      ]}>
      <View style={styles.container}>
        <View>
          <Text>2333</Text>
        </View>
        <View style={styles.bottom}>
          <Text>bottom</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: 'grey',
    position: 'relative',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f40',
  },
});

export default ExampleScreen;
