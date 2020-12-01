import 'react-native-gesture-handler';
<script src="http://localhost:8097"></script>
import React from 'react';
import {  Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

export default function ListImage(props) {
  if (props.item.picture !== undefined) {
    dimensions = props.item.picture.metaData('dimensions')
    screenWidth = Math.round(Dimensions.get('window').width);
    screenHeight = Math.round(Dimensions.get('window').height);

    parentWidth = screenWidth -40

    if (dimensions !== undefined) {
      // console.log(dimensions)
      imageWidth = dimensions.width
      imageHeight = dimensions.height
      imageRatio = imageHeight / imageWidth
      if (imageWidth > parentWidth) {
        imageWidth = parentWidth
        imageHeight = imageWidth * imageRatio
      }
    } else {
      screenRatio = screenHeight / screenWidth
      imageWidth = parentWidth
      imageHeight = imageWidth * screenRatio
    }

    style = { ...{ width: imageWidth, height: imageHeight, alignSelf: "center", resizeMode: 'contain' }, ...props.style }

    return <FastImage source={{ uri: props.item.picture.attributes.url }}
      style={style}
    />
  } else {
    return null
  }
}

