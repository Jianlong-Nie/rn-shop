import React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Button, TouchableWithoutFeedback, Text, TouchableOpacity, AppState, ImageBackground } from 'react-native';
import ListImage from '../screens/CustomViews/ListImage'
import IconImage from '../screens/CustomViews/IconImage';
import FastImage from 'react-native-fast-image';

export default function HomeItem({item}) {
    debugger
 function _onPressReport() {
    // setReportID(this.key)
    // setModalVisible(true)
  }
  return (<TouchableWithoutFeedback onPress={()=>navigate('CommentScreen', { postObjectId: item.key, postTitle: item.title })}  >
    <View style={styles.itemContainer} >
      <View style={styles.titleView}>
        <IconImage user={item.author} style={styles.iconImage} />
        {
        item.content &&  
        <Text style={styles.content} >
            {item.content}
        </Text>
        }
        <View style={{ justifyContent: "space-between" }} >
          <TouchableOpacity onPress={_onPressReport.bind(item)}>
            <FastImage source={require('../../asset/report-button.png')} style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          <Text style={styles.commentCount}>
            {'💬:' + item.commentCount}
          </Text>
        </View>
      </View>
      <ListImage item={item} style={styles.listImage} />
    </View>
  </TouchableWithoutFeedback>);
}


  const styles = StyleSheet.create({
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      // backgroundColor:'#f00',
    },
    postButton: {
  
      width: 40,
      height: 40,
      // borderRadius: 20,
      // borderWidth:4,
      // borderColor:'#fff'
    },
    container: {
      // alignItems:'center',
      // justifyContent:'center',
      // backgroundColor: '#ffffff',
      flex: 1,
    },
    flatList: {
      flex: 1,
      marginHorizontal: 10,
      // paddingTop: 10,
    },
    itemContainer: {
      backgroundColor: '#ffff',
      flex: 1,
      marginBottom: 10,
      borderColor: '#aaa',
      borderWidth: 1,
      borderRadius: 10,
    },
    titleView: {
      marginHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconImage: {
      width: 35,
      height: 35,
      borderRadius: 100,
      margin: 10,
    },
    content: {
      margin: 10,
      flex: 1,
      fontSize: 20,
      color: '#000d',
    },
    commentCount: {
      marginRight: 10,
      color: '#888'
    },
    listImage: {
  
    },
  })
  