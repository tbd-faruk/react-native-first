import React from 'react';
import type {Node} from 'react';
import { NativeBaseProvider, Box } from "native-base";
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import Home from './src/components/Home';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex:1}} >
        <NativeBaseProvider>
      <StatusBar />
        {/* <Home /> */}
        {/* <Warning /> */}
        {/* <BasicDetail /> */}
        {/* <Text>Hello</Text> */}
        {/* <ConfirmUser /> */}
        {/* <UserInfo /> */}
        {/* <CreatePassword /> */}
        {/* <EnterSmsPin /> */}
        <Text>Hi</Text>
        </NativeBaseProvider>
      
    </SafeAreaView>
  );
};

export default App;