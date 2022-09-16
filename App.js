import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image} from 'react-native';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  
  const getRepositories = async () => {
   
  try{
   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`);
   //const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
    const data = await response.json();
    setRepositories(data.meals);
  }catch(error){ 
        Alert.alert('Error', error); 
    };    
  }
  
  

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) => 
          <View>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.strMeal}</Text>
            <Image source={{uri: item.strMealThumb}}
         style={{width: "30%", height: 50}} />
           
          </View>}
        data={repositories} 
        /> 
      <TextInput style={{fontSize: 18, width: 200}} placeholder='keyword' 
        onChangeText={text => setKeyword(text)} />
      <Button title="Find" onPress={getRepositories} />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
 
});