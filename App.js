import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/components/auth/Login';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from './src/constant/colors';
import Logo from './src/components/svgIcons/Logo';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <LinearGradient
        start={{x: 0.0, y: 0.2}}
        end={{x: -0.5, y: 1.0}}
        locations={[0, 0.7]}
        colors={colors['dark'].bgGradient}
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.loginFormContainer}>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <View style={{height: 80, justifyContent: 'center'}}>
              <Text
                style={{
                  color: colors['dark'].white,
                  fontWeight: 'bold',
                  fontSize: 28,
                }}>
                Login
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Login />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  loginFormContainer: {
    width: 240,
    minHeight: 400,
    backgroundColor: colors['dark'].glassColor20,
    borderRadius: 15,
    alignItems: 'center',
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(15,59,84,0.6)',
    marginTop: -30,
  },
  inputContainer: {
    width: '90%',
  },
});
