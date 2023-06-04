import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = () => {
  return(
    <View style={styles.header}>
      {/* <Icon name="glass" size={20} color="white" style={styles.img}/> */}

      {/* <Image source={require('/Users/erfan/Desktop/reactnative/components/images.jpeg')} style={styles.img} /> */}
      <ImageBackground source={require('/Users/erfan/Desktop/reactnative copy 2/components/de3d6950a5caef1d7a520f580fce9b59.jpg')} style={styles.img}>
        <Text style={styles.text}>
          HappyShot
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    // justifyContent:'space-between',
    height: 160,
    padding: 15,
    backgroundColor: 'rgb(0,0,0)',

  },
  img: {
  //   width:40,
  //   height: 40,
  //   // backgroundColor: 'darkslateblue'
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 28,
    fontFamily:'GillSans-Italic'
  }
});

export default Header;