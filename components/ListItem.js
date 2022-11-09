import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity , Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

function ListItem({image  , changeFlag}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{image._id}</Text>
        <Image
        style={styles.image}
        source={{
          uri: `${image.imageURL}`
        }}
      />
        <Icon name = "remove" size ={20} color="firebrick" onPress={()=>changeFlag(image._id)}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem : {
        padding :15 ,
        backgroundColor : '#f8f8f8',
        borderBottomWidth : 1, 
        borderColor : '#eee'
    },
    listItemView : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    listItemText :{
        fontSize :18
    },
    image : {
      width : 100,
      height :100
    }
    
});

export default ListItem;
