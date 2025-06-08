/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';
import {Linking} from 'react-native';
import handleDeepLink from './linkingListener';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('📩 Background Notification:', remoteMessage);
//   });

AppRegistry.registerComponent(appName, () => App);
Linking.addEventListener('url', handleDeepLink);
