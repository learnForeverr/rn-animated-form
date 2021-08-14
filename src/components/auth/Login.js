import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/colors';
import InputComponent from '../common/InputComponent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 115,
        }}>
        <InputComponent value={email} setValue={setEmail} label="Email" />
        <InputComponent
          value={password}
          setValue={setPassword}
          label="Password"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 120,
        }}>
        <LinearGradient
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={colors['dark'].btnGradient}
          style={styles.buttonContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors['dark'].white,
            }}>
            Login
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 40,
    borderRadius: 8,
    marginTop: 20,
  },
});
