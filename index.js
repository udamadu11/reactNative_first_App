
//import libarary
import React from 'react';
import {Text,AppRegistry,View} from 'react-native';
import  Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

//create component

const App = () => (
  <View style = {{flex: 1}}>
      <Header headerText= {'Album'} />
      <AlbumList />
  </View>
  );


//render to device
AppRegistry.registerComponent('albums', () => App);
