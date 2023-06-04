import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import DrinkItem from './DrinkItem';


const DrinkList = ({data, currentDrink}) => {
  const [display,setDisplay]=useState('false')

  return(
    <View style={styles.gridList}>
    {data.map(item=> (
      <DrinkItem drink={item} currentDrink={currentDrink} style={styles.gridList}/>
    ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60,

  },
  gridList:{
    backgroundColor:'rgb(0,0,0)',
    // flex: 0.5,
    // display:'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    flexWrap:'wrap'
  }
});

export default DrinkList;