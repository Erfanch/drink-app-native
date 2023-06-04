import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity,TouchableHighlight,ImageBackground} from 'react-native';
import DescriptionPanel from './DescriptionPanel';
import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window')

const DrinkItem = ({drink, currentDrink}) => {
  const [display,setDisplay]=useState('false')

  const addIng = () => {
    console.log('Shaahhhhaaab',drink);
    currentDrink(drink)
  }

  return(
    <View style={styles.drinkList}>
      <ImageBackground source={{uri:`${drink.strDrinkThumb}`}} onPress={() => addIng()} style={styles.img}>
        <TouchableHighlight onPress={() => addIng()} style={styles.labelContainer}>
          <Text style={styles.text}>
            {drink.strDrink}
          </Text>
        </TouchableHighlight>
      </ImageBackground>
       {/* <Image source={{uri: `${drink.strDrinkThumb}`}} style={styles.img} /> */}
       {/* {display ? <DescriptionPanel drink={drink}/> : null} */}
    </View>
  )
};

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
      tiny: 15,
      small: 20,
      medium: 30,
      large: 45,
      xl: 50
  }
}

const colors = {
  white: 'white',
  black: 'black',
  blackTransparent: 'rgba(0,0,0, 0.40)'
}

const styles = StyleSheet.create({
  drinkList: {
    // flexDirection:'row',
    // flexWrap: 'wrap',
    // justifyContent:'space-between',
    // alignItems: 'center',
    // padding: 15,
    // backgroundColor: 'rgb(0,0,40)',
    paddingLeft: 5,
    paddingTop: 5
  },
  text: {
    // color: '#fff',
    // textAlign: 'center',
    // fontSize: 23,
    // textAlign:'center',
    // fontFamily:'Georgia',
    color: colors.white,
    marginLeft: metrics.smallMargin

  },
  img: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",

    width: ((metrics.screenWidth - 5) / 3) - 5,
    height: ((metrics.screenWidth - 5) / 3) - 5,
    justifyContent: 'flex-end'

    // width:100,
    // height: 100
  },
  labelContainer: {
    backgroundColor: colors.blackTransparent,
    height: metrics.section,
    justifyContent: 'center'
}
});

export default DrinkItem;