import React from 'react';
import { View,Text,Image,Linking } from 'react-native';
import Card from './Card.js';
import CardSelection from './CardSelection.js';
import Button from './button.js';
const AlbumDetails = ({album}) =>{
  const { title, artist, thumbnail_image,image,url } = album;
  const { headerTextStyle,thumbnailContainerStyle,containerHeder , thumbnailStyle ,imageStyle } = styles;
  return(
    <Card>
      <CardSelection>
        <View style = {thumbnailContainerStyle}>
          <Image
              style = { thumbnailStyle }
              source = {{uri: thumbnail_image}}
           />
        </View>
        <View style = {styles.containerHeder}>
          <Text style = {headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSelection>
      <CardSelection>
        <Image
        style = { imageStyle }
        source = {{uri: image}}
        />
      </CardSelection>
      <CardSelection>
        <Button onPress={() => Linking.openURL(url)}>
            Buy Now
        </Button>
      </CardSelection>
    </Card>
  );
};

const styles = {
  containerHeder :{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle:{
    height:350,
    width: null,
    flex: 1
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle:{
    width: 50,
    height: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetails;
