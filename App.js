import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList} from 'react-native';
import Car from './components/Car';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Car 
        model="Model S"
        delivery="Touchless Delivery"
        imgURL='https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop'
        />   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
