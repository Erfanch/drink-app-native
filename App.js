import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import sampleData from './sampleData';
import DrinkList from './components/DrinkList';
import DescriptionPanel from './components/DescriptionPanel';

const App = () => {
  const [drinksName, setDrinksName] = useState([]);
  const [drinks, setDrinks] = useState(sampleData);
  const [display, setDisplay] =useState('false');
  const [displayDrink, setDisplayDrink] = useState()

  const getDrinksInfo = () => {
    // console.log('aaaaar', drinksName.drinksName)
    // console.log('img', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ drinksName.drinksName)
    const url =(drinks.length === 0 ? 'https://localhost:3999' : drinksName.length === 0 ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ drinksName.drinksName)
    console.log('url', url)
    axios.get(url)
    .then(function (response) {
    console.log('response', response.data.drinks);
    updateDrinks(response.data.drinks)
  })
    .catch(function (error) {
    console.log(error);
  });
  }

  const updateDrinks = (arrayOfDrinks) => {
    // console.log('hello', arrayOfDrinks)
    setDrinks(arrayOfDrinks);
    console.log('drinks', drinks)
  }
  const addDrink = (drink) => {
    console.log(drink)
    if(!drink) {
      Alert.alert('Error', 'Please enter an item', {text : 'OK'})
    } else {
      setDrinksName({drinksName: drink}),
      setDisplay('false'),
      getDrinksInfo()
      console.log(drinksName)
    }
  }

  const currentDrink =(drink) => {
    setDisplayDrink(drink),
    setDisplay(!display)
  }

  const displayPage=() => {
    setDisplay('false')
  }

  useEffect(() => {
    getDrinksInfo()
  }, [])

  if(display !== 'false') {
    return(
      <DescriptionPanel drink={displayDrink} displayPage={displayPage} addDrink={addDrink}/>
    )
  } else {
    return(
        <View style={styles.container}>
          <Header />
          <SearchBar addDrink={addDrink}/>
          <FlatList
          data={drinks}
          renderItem={({item})=> <DrinkList data={drinks} currentDrink={currentDrink}/>}
          keyExtractor={item => item.idDrink}
          />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60,
    backgroundColor:'rgb(0,0,0)',
  }
});

export default App;
