import React from 'react';
import { View,Text } from 'react-native';
import Card from './Card.js';
import CardSelection from './CardSelection.js';

const AlbumDetails = (props) =>{
  return(
    <Card>
      <CardSelection>
        <Text>{props.album.title}</Text>
      </CardSelection>
    </Card>
  );
};

export default AlbumDetails;
