import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  listView: {
    borderWidth: 2,
    borderRadius: 10,
    width: '90%',
    marginLeft: '5%',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listView2: {
    flexDirection: 'row',
  },
  addBasket: {
    width: '50%',
    backgroundColor: 'rebeccapurple',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
    borderRadius: 10,
  },
  addBasketText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goBasket: {
    backgroundColor: 'darkorange',
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBasketText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ProductsScreen = () => {
    const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getListPhotos();
    return () => {};
  }, []);
  getListPhotos = () => {
    const apiURL =
      'https://jsonplaceholder.typicode.com/photos?_limit=20&page=1';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error:', error);
      })
      .finally(() => setIsLoading(false));
  };
  const basketProducts = [];
  AddBasket = item => {
    return basketProducts.push(item);
  };
  RenderItem = ({item}) => {
    return (
      <SafeAreaView>
        <View style={styles.listView}>
          <Image source={{uri: item.thumbnailUrl, width: 100, height: 100}} />
          <View>
            <View style={{width: '70%'}}>
              <Text> {item.title} </Text>
            </View>
            <Text> {item.id}TL </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addBasket}
          onPress={() => AddBasket(item)}>
          <Text style={styles.addBasketText}>Add to Basket</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.goBasket} onPress={()=> navigation.navigate('Basket', {list: basketProducts})}>
        <Text style={styles.goBasketText}>Go to Basket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
