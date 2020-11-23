import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View, Modal, TouchableHighlight, Button, TouchableWithoutFeedback, Text, TouchableOpacity, AppState, ImageBackground } from 'react-native';
import { useFocusEffect} from '@react-navigation/native';
import HomeItem from '../cmp/HomeItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { ListView } from '@ant-design/react-native';

 function HomeScreen(props) {
  const { refreshing,
          listData,
          modalVisible,
          reportID,
          navigation,
          dispatch} = props;

  useEffect(() => {
    dispatch({ type: 'user/login'});
    
  }, [])

  
  onFetch = async (page = 1,startFetch,abortFetch) => {
    dispatch({ type: 'home/onFetch',payload:{
      page,
      startFetch,
      abortFetch}});
  };
  return (<View style={styles.container}>
    <ImageBackground style={{ justifyContent: 'center', flex: 1, resizeMode: 'cover', }} source={require('../../asset/background-home.png')}>
     
     
    </ImageBackground>
  </View>)
}

const mapStateToProps = ({
  home:{refreshing,listData,modalVisible,reportID}
}) => ({
  refreshing,listData,modalVisible,reportID
});
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  
  listImage: {

  },
})
