
//import libarary
import React from 'react';
import {Text,AppRegistry} from 'react-native';
import  Header from './src/components/header.js';



//create component

const App = () => (
      <Header headerText={'Album'} />
  );


//render to device
AppRegistry.registerComponent('albums', () => App);
