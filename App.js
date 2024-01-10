import {StatusBar} from 'react-native';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './Navigation/Navigation';
// import Input from './Pages/Input';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='dark' />
      <View style={styles.container}>
        <Navigation />
      </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'green'
    width:'100%'
  },

});
