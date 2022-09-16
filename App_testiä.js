import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [virhe, setVirhe] = useState('Haetaan ...');
 
  const fetchUrl = async () => {
    try {
      //const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
      const json = await response.json();
      setName(json.strMeal);
      setPhoto(json.strMealThumb);
      setVirhe('');
    } catch (error) {
      setVirhe('Haku ei onnistunut');
    }
  }

  useEffect(() => {
    
    
  }, []);

  if (virhe.length > 0) {
    return (<Text>{virhe}</Text>)
  }
  return (
    <View style={styles.container}>
      <Text>
       {name}  {photo}  
        </Text>
      
      <StatusBar style="auto" />
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
