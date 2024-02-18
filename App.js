import {StatusBar} from 'react-native';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './Navigation/Navigation';
// import Input from './Pages/Input';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import OrderNav from './Pages/myOrderFlow/Navigation/OrderNav'
import RoleNav from './Pages/RoleBasedFlow/navigation_role/RoleNav';
import UserProvider from './Pages/RoleBasedFlow/context/UserProvider';
export default function App() {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProvider>
      <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='dark' />
      <View style={styles.container}>
        {/* <Navigation /> */}
        {/* <orderNav /> */}
        <RoleNav />
      </View>
      </GestureHandlerRootView>
      </PaperProvider>
      </UserProvider>
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
