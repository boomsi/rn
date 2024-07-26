import publicStyles from 'app/styles';
import {forwardRef} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';

const BottomModalFull = forwardRef(
  ({children}: {children: React.ReactNode}, ref) => {
    const {height} = useWindowDimensions();

    return (
      <Modalize
        ref={ref}
        // snapPoint={300}
        // modalTopOffset={200}
        modalHeight={height - 100}
        HeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>设置</Text>
            <TouchableOpacity>
              <Text style={[styles.close, publicStyles.active]}>关闭</Text>
            </TouchableOpacity>
          </View>
        }
        withHandle={false}
        handlePosition="inside">
        {children}
      </Modalize>
    );
  },
);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  close: {
    position: 'absolute',
    right: 16,
    top: -16,
  },
});

export default BottomModalFull;
