import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        marginLeft: '5%',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        

    },
    basketView: {
        width: '70%',

    },
  });

export default BasketScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const productsList = route.params.list;

  const RenderItem = () => {
    <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
      <Text>SFeafe</Text>
    </View>;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={productsList}
        renderItem={({item}) => 
        
        <View style={styles.container}>

            <Image source={{uri: item.thumbnailUrl, width: '30%', height: '100%'}} />

            <View style={styles.basketView}>
                <Text>{item.title}</Text>
                <Text>{item.id}</Text>
            </View>
                
        </View>
    
    }
        keyExtractor={item => {
          item.id;
        }}
      />
    </SafeAreaView>
  );
};
