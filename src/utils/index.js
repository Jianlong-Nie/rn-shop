import DeviceInfo from 'react-native-device-info';
import * as RootNavigation from '../routers/RootNavigation';

export function isCN() {
    const local = DeviceInfo.getDeviceLocale();
    return local.indexOf('CN') !== -1;
}

export function navigato(route,params) {
    RootNavigation.navigate(route, params);
}