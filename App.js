import React , {useState} from 'react';
import {View, Text, StyleSheet , FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {uuid} from 'uuidv4'

const App = () => {

  // console.log(uuid);

  const [items, setItems] = useState([
    {id : 1 , text : 'Milk'},
    {id : 2 , text : 'Butter'},
    {id : 3 , text : 'Eggs'},
    {id : 4 , text : 'Bread'},
  ])

  return (
    <View style={styles.container}>
     <Header title ="Shopping List"/>
     <FlatList data={items} renderItem ={({item}) =>
     <ListItem item={item}/>
     }/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
export default App;
