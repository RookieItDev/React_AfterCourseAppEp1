/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScreenWidthHigth from './screens/ScreenWidthHigth';
import ScreenOrientation from './screens/ScreenOrientation';
import InternetConnectionStatus from './screens/InternetConnectionStatus';
import LinkPhoneSMSEmailURL from './screens/LinkPhoneSMSEmailURL';


AppRegistry.registerComponent(appName, () => LinkPhoneSMSEmailURL);
