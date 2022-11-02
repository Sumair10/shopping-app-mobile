import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title }</Text>
    </View>
  );
}

Header.defaultProps={
    title : "Hello"
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily :'Cochin',
    fontWeight : 'bolder',
    textAlign: 'center',
  },
});

export default Header;
