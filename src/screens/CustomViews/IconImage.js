import 'react-native-gesture-handler';
<script src="http://localhost:8097"></script>
import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'

export default function IconImage(params) {

  try {
    return <FastImage source={{ uri: params.user.get('iconImage').attributes.url }}
      defaultSource={require('../../../asset/upload-icon.png')}
      style={params.style}
    />
  } catch{
    return <FastImage source={require('../../../asset/image-icon.jpg')} style={params.style} />

  }
}

