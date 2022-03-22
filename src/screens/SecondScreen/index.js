import React from 'react';
import {Text,View} from 'react-native';

export default function SecondScreen(){
  const countContext = useCountContext();
  console.log(countContext);
  return(
    <View>
      <Text>Second Screen</Text>
    </View>
  );
}