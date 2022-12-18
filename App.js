import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';
import GetImages from './components/GetImages';
import axios from 'axios';

const App = () => {
  // console.log(uuid);

  const [items, setItems] = useState([
    {
      id: uuid.v4(),
      text: '1',
      uri: 'https://photo-retouch.s3.ap-south-1.amazonaws.com/63468cec8cd71b101f01d3a7/634d3a6e1ab5b441d1c34626/image0',
    },
    {
      id: uuid.v4(),
      text: '2',
      uri: 'https://photo-retouch.s3.ap-south-1.amazonaws.com/63468cec8cd71b101f01d3a7/634d3a6e1ab5b441d1c34626/image1',
    },
    {
      id: uuid.v4(),
      text: '3',
      uri: 'https://photo-retouch.s3.amazonaws.com/63468cec8cd71b101f01d3a7/634d3a3a1ab5b441d1c345f2/image2',
    },
    {
      id: uuid.v4(),
      text: '4',
      uri: 'https://photo-retouch.s3.amazonaws.com/63468cec8cd71b101f01d3a7/634d3a3a1ab5b441d1c345f2/image4',
    },
  ]);
  const [images, setImages] = useState([]);
  const [flag, setFlag] = useState(false)
  // console.log('items', items);

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id !== id);
    });
  };

  const changeFlag = id => {
    console.log('change flag', id);

    axios
      .post('http://192.168.18.208:4000/image/changeFlag', {
        id: id,
      })
      .then(function (response) {
        // console.log("===============>", response.data);
        const a = images.filter(image => image._id !== id);
        setImages(a);
        // console.log("images" , a)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addItem = item => {
    if (!item) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems(prevItem => {
        return [{id: uuid.v4(), text: item}, ...prevItem];
      });
    }
};

  // useEffect(() => {
  //   if(images){

  //     setTimeout(() => {
  //       changeFlag(images[0]._id);
  //       setFlag(false)
  //     }, 5000);
  //   }
  // }, [flag]);

  const getImages = () => {
    console.log('get images');
    axios
      .get('http://192.168.18.208:4000/image/getImages')
      .then(function (response) {
        console.log('===============>', response.data[0]._id);
        if (response.data === 'not found') {
          console.log('enter in iff');
          Alert.alert('Error', 'No more images available', [{text: 'Ok'}]);
        } else {
          if (images.length > 0) {
            // setImages([...images, ...response.data]);
            // setTimeout(() => {
            //   changeFlag(response.data[0]._id);
            // }, 5000);
          } else {
            setImages(response.data);
            setFlag(true)
           
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    // <View style={styles.container}>
      {/* <Header title="Get Images App" /> */}
      {/* <AddItem addItem={addItem}/> */}
      <GetImages getImages={getImages} />
      {images ? (
        <FlatList
          data={images}
          renderItem={({item}) => (
            <ListItem image={item} changeFlag={changeFlag} />
          )}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
