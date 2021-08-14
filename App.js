import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Login from './src/components/auth/Login';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{flex: 1}}>
        <Login />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
