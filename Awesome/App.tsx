import React, {useState} from 'react';
import { StyleSheet, Image, TextInput, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
var uuid = require('react-native-uuid');


export default function App() {
  const [value, onChangeText] = useState('Write your name here');
  const [items, setItems] = useState([
    {id: uuid.v4(), text: "Milk"},
    {id: uuid.v4(), text: "Eggs"},
    {id: uuid.v4(), text: "Bread"},
    {id: uuid.v4(), text: "Juice"},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (item) => {
    setItems(prevItems => {
      return [{id: uuid.v4(), text: item}, ...prevItems];
    })
  }

  return (
    <View style={styles.container}>
      <Header /> 
      <Text style = {styles.text}>This page sells items!</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}  style={styles.img} />
      {/* <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      /> */}
      <AddItem addItem={addItem} />
      <FlatList 
        data = {items} 
        renderItem = {({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    justifyContent: 'center',
    fontSize: 20
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
});
