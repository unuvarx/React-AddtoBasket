// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from "./src/screens/HomeScreen"
// import DetailScreen from "./src/screens/DetailScreen"

// const Stack = createNativeStackNavigator()

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen  name="Home" component={HomeScreen} />
//         <Stack.Screen  name="Detail" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };
// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenStackHeaderLeftView} from 'react-native-screens';
import ProductsScreen from './src/screens/ProductsScreen';
import BasketScreen from './src/screens/BasketScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
