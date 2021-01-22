import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProductList from './Component/productList'

export default function App() {
  const [OutputText,setText]= useState("Test Native Button")
  return (
    <View style={styles.container}>
      <Text>Developer Funnel</Text>
      <Text>{OutputText}</Text>
      <Button title="Click Me" onPress={() => setText('Text Changed')}/>
      <Button title="Revert Me" onPress={() => setText('Test Native Button')}/>
      <ProductList/>
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
