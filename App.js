import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/routers/router';
import { connect } from 'react-redux';
import { Provider } from '@ant-design/react-native';
// require('react-native').unstable_enableLogBox()


export const AppStateContext = React.createContext();
const isInternational = true

const AppStateProvider = props => {
  
  return (
    <AppStateContext.Provider>
      {props.children}
    </AppStateContext.Provider>
  );
};





const App: () => React$Node = () => {
  return (
   <Provider>
      <AppStateProvider>
         <Router></Router>
      </AppStateProvider>
    </Provider>
    
  );
}
export default connect()(App);