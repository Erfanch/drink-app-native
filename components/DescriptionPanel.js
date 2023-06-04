// import React, {useState} from 'react';
// import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button,ScrollView} from 'react-native';
// import Header from './Header';
// import SearchBar from './SearchBar';

// const DescriptionPanel = ({drink, displayPage, addDrink}) => {

//   return(
//     <View style={styles.header}>
//       <Header />
//       <SearchBar addDrink={addDrink}/>
//       <ScrollView style={styles.drinkList}>
//       <Image source={{uri: `${drink.strDrinkThumb}`}} style={styles.img} />
//       <Text style={styles.text}>
//         Ingredients:{"\n"}
//       {drink.strIngredient1} {drink.strMeasure1}{"\n"}
//       {drink.strIngredient2} {drink.strMeasure2}{"\n"}
//       {drink.strIngredient3} {drink.strMeasure3}{"\n"}
//       {drink.strIngredient4} {drink.strMeasure4}

//       </Text>
//       <Text style={styles.text}>
//         Instruction:{"\n"}
//       {drink.strInstructions}
//       </Text>
//       <Button
//         title="Home"
//         color="#B0B0B0"
//         onPress={() => displayPage()}
//       />
//     </ScrollView>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   drinkList: {
//     // flexDirection:'row',
//     // paddingTop: 60,
//     backgroundColor: 'rgb(0,0,0)'
//   },
//   header:{
//     flex:1,
//     paddingTop: 60,
//   },
//   text: {
//     color: 'black',
//     textAlign: 'center',
//     fontSize: 23,
//     padding:10,
//     fontFamily:'GillSans-Italic',
//     color:'white'
//     // flex:1
//   },
//   img: {
//     // margin: 20,
//     // flexDirection:'row',
//     // padding: 25,
//     // width:150,
//     height:400,
//     // alignItems:'center',

//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//   }
// });

// export default DescriptionPanel;

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button,ScrollView} from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';

const DescriptionPanel = ({drink, displayPage, addDrink}) => {

  return(
    <View style={styles.header}>
      <Header />
      <SearchBar addDrink={addDrink}/>
      <ScrollView style={styles.drinkList}>
      <Image source={{uri: `${drink.strDrinkThumb}`}} style={styles.img} />
      <Text style={styles.text}>
        Ingredients:{"\n"}
      {drink.strIngredient1} {drink.strMeasure1}{"\n"}
      {drink.strIngredient2} {drink.strMeasure2}{"\n"}
      {drink.strIngredient3} {drink.strMeasure3}{"\n"}
      {drink.strIngredient4} {drink.strMeasure4}
      </Text>
      <Text style={styles.text}>
        Instruction:{"\n"}
      {drink.strInstructions}
      </Text>
      <Button
        title="Home"
        color="#B0B0B0"
        onPress={() => displayPage()}
      />
    </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  drinkList: {
    // flexDirection:'row',
    // paddingTop: 60,
    backgroundColor: 'rgb(0,0,0)'
  },
  header:{
    flex:1,
    paddingTop: 60,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 23,
    padding:10,
    fontFamily:'GillSans-Italic',
    color:'white'
    // flex:1
  },
  img: {
    // margin: 20,
    // flexDirection:'row',
    // padding: 25,
    // width:150,
    height:400,
    // alignItems:'center',

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
});

export default DescriptionPanel;