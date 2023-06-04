// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// const SearchBar = ({addDrink}) => {
//   const [state, setState] = useState([''])

//   const handleChange = (stateValue) =>
//     setState(stateValue);

//   return(
//     <View style={styles.SearchBar}>
//       <TextInput placeholder="Search..." placeholderTextColor = "#B0B0B0" style={styles.search} onChangeText={handleChange} />
//       <TouchableOpacity style={styles.btn} onPress={() => addDrink(state)}>
//         <Icon name="search" size={20} color='#B0B0B0' />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   SearchBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // borderWidth:1,
//     // borderColor: '#eee'
//   },
//   search: {
//     flex:4,
//     height: 40,
//     padding: 8,
//     fontSize: 16,
//     backgroundColor: '#202021',
//     // borderWidth:1,
//     color: 'white',
//   },
//   btn: {
//     flex:1,
//     alignItems:'center',
//     backgroundColor: '#202021',
//     justifyContent: 'center',
//     padding: 8,
//     // margin: 5,
//     borderColor:1,
//     // ':hover': {
//     //   color: 'blue'
//     // }
//   }
// });

// export default SearchBar;

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
let drinkname = ''

const SearchBar = ({addDrink}) => {
  const [drinkName, setdrinkName] = useState([''])

  const handleChange = (stateValue) =>
   {
    console.log("====~~~  <<<<", drinkName, " === ", drinkname)
     setdrinkName(stateValue);
     console.log("====~~~ ", drinkName , " === ", drinkname)
     addDrink(drinkName)
   }

  return(
    <View style={styles.SearchBar}>
      <TouchableOpacity style={styles.btn} onPress={() => addDrink(drinkName)}>
        <Icon2 name="arrow-back" size={20} color='#B0B0B0' />
      </TouchableOpacity>
      <TextInput placeholder="Search..." placeholderTextColor = "#B0B0B0" style={styles.search} onChangeText={handleChange} value={drinkName} />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    // borderColor: '#eee'
  },
  search: {
    flex:4,
    height: 40,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#202021',
    // borderWidth:1,
    color: 'white',
  },
  btn: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#202021',
    justifyContent: 'center',
    padding: 8,
    // margin: 5,
    borderColor:1,
    // ':hover': {
    //   color: 'blue'
    // }
  }
});

export default SearchBar;