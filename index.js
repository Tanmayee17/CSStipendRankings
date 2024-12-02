import { AppRegistry } from 'react-native';
import App from './App'; 
import { name as appName } from './app.json';
import 'react-native-gesture-handler'; // Required for React Navigation

AppRegistry.registerComponent(appName, () => App);
console.log('App is being registered...');
AppRegistry.registerComponent(appName, () => App);
console.log('App registered successfully.');
