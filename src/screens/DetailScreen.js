import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rebeccapurple',
      }}>
      <Text>Welcome Detail Screen!</Text>
      <Text>Dear {route.params.name}</Text>
      <Button title="go back " onPress={() => navigation.goBack()} />
    </View>
  );
};
