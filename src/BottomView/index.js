import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function BottomView() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Hi </Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
      />
      <TextInput placeholder='Input email'/>
      <TextInput placeholder='Input password' secureTextEntry/>

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
  container2:{
    backgroundColor: 'green'
  },
  text1:{
    color: 'blue'
  }
});