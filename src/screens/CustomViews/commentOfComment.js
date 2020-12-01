import 'react-native-gesture-handler';
<script src="http://localhost:8097"></script>
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, } from 'react-native';
import AV from 'leancloud-storage/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconImage from './IconImage';
import ListCommentImage from './ListCommentImage'

export default function CommentOfComment(params) {

  const [listData, setListData] = useState([])

  function onPressLoadingComment() {
    const query = new AV.Query('CommentOfComment');
    const comment = AV.Object.createWithoutData('Comment', params.item.key);
    query.equalTo('OriginalComment', comment);
    query.limit(10);
    query.skip(listData.length)
    query.include('Author')
    query.ascending('createdAt');
    query.find().then((comments) => {
      // comments 包含与 post 相关联的评论
      let arrayDatas = []
      let comment;
      for (comment of comments) {
        arrayDatas.push({
          key: comment.get('objectId'),
          author: comment.get('Author'),
          content: comment.get('content'),
          picture: comment.get('picture'),
        })
      }
      setListData(listData.concat(arrayDatas))
    });
  }

  renderItem = ({ item }) => (
    <View>
    <View style={styles.itemView} >
      <IconImage user={item.author} style={styles.iconImage} />
      <Text style={styles.itemText}>
        {item.content}
      </Text>
    </View>
    <ListCommentImage item={item}/>
    </View>
    )


  if (params.item.commentCount == 0) {
    return null
  } else if ((params.item.commentCount - listData.length) > 0) {
    return (
      <View>
        <FlatList
          style={styles.flatList}
          data={listData}
          renderItem={renderItem} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPressLoadingComment} style={styles.button}>
            <Text style={styles.buttonText}>
              {'Unfold ' + (params.item.commentCount - listData.length) + ' 💬'}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  } else {
    return (
      <View>
        <FlatList
          style={styles.flatList}
          data={listData}
          renderItem={renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  buttonContainer: {

  },
  button: {
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'center',
  },
  itemView: {
    borderTopWidth: 1,
    borderColor: '#0005',
    paddingVertical: 5,
    marginVertical: 5,
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',

  },
  iconImage: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  itemText: {
    flex: 1,
    marginHorizontal: 20,
  },
})

