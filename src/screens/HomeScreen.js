import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cyan',
      }}>
      <Text>Welcome Home Screen!</Text>
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
        }}
        placeholder="What is your name?"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="go to details"
        onPress={() => navigation.navigate('Detail', {name: name})}
      />
    </View>
  );
};
