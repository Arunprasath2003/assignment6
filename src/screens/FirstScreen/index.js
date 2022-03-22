import React from 'react';
import {Text,View} from 'react-native';

export default function FirstScreen(navigation){

  return(
    <View>
      <Text>First Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Second")} style={{backgroundcolor: 'red', padding: '2%'}}
        <Text style={{color: "#fff", fontSize:18}}> Go to page 2</Text>
      </TouchableOpacity>
    </View>
  );
}