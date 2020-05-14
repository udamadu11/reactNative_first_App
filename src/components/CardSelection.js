import React from 'react';
import { View } from 'react-native';

const CardSelection = (props) =>{
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle : {
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',

  }
};
export default CardSelection;
