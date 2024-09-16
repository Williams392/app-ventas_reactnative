import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Signup from './src/screens/auth/Signup';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//const WEB_CLIENTE_ID = '728217417734-i3224c1oscvp41hgeaktlete9ertbdl1.apps.googleusercontent.com'
//const IOS_CLIENTE_ID = '728217417734-ghca29tomld2p43mefk79um4563l8f52.apps.googleusercontent.com'

const App = () => {

  /*useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []) */

  return (

    <SafeAreaView>
      
      <Signup/>

    </SafeAreaView>

  );
}

export default App;