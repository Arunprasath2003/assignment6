import React from 'react';
import {Text,View} from 'react-native';

export default function MainScreen(){
  const countContext = useCountContext();
  console.log(countContext);
  return(
    <View>
      <Text>Main Screen</Text>
    </View>
  );
}