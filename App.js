import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList , Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';

const App = () => {
  // console.log(uuid);

  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Butter'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
  ]);
  console.log('items', items);

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
  };

  const addItem = item => {
    if(!item){
      Alert.alert('Error' ,'Please enter an item' , [{text : 'Ok'}])
    }
    else{

      setItems(prevItem => {
        return [{id: uuid.v4(), text: item}, ...prevItem];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
