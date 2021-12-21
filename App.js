import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import {SafeAreaView} from 'react-native';

let App = () => {
  return (
    <SafeAreaView style= {{ flex: 1}}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
