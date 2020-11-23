/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import dva from './src/dva';
import { navigato } from './src/utils';

global.navigate = navigato;

AppRegistry.registerComponent(appName, () => dva);
