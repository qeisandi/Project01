import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Image source={require('./src/images/gambar.jpg')} />
      <Text>login</Text>
      <Text>login your account</Text>
      <TextInput
        value={email}
        style={styles.emailinput}
        placeholder="Username"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        value={password}
        style={styles.passwordinput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d1d0d0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  emailinput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  passwordinput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#1C352D',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default Login;
