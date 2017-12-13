import { Constants } from 'expo'; //expo sdk Constants variable for default screen sizes for mobiles
import { Platform, StatusBar } from 'react-native'; //allows to apply Platform-specific logic
import { StackNavigator } from 'react-navigation';
import FilmListScreen from './screens/FilmListScreen'
import FilmDetailScreen from './screens/FilmDetailScreen'

const isAndroid = (Platform.OS === 'android');  //flag to check if android platform is true

const extraStyles = Platform.select({   //applies extra styles depending on which platform the app is being run on
  android: {
    marginTop: Constants.statusBarHeight
  }
});

StatusBar.setBarStyle('light-content'); //adds white background for iOS status bar

export default StackNavigator({ //StackNavigator take objects
  List: {screen: FilmListScreen},
  Detail: {screen: FilmDetailScreen}
}, {
  cardStyle: {
    backgroundColor: '#fff'
  },
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#68aa63',
      ...extraStyles  //spread syntax / applies the extraStyles for only android devices
    }
  }
});
