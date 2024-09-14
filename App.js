import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Signup from './src/screens/auth/Signup';
//import Splash from './src/screens/auth/Splash';

export default function App() {
  return (
    <SafeAreaView>
      
      <Signup/>

    </SafeAreaView>
  );
}
