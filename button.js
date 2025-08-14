import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

const button = () => {
  // function untuk menangani event ketika tombol ditekan
  function handlePress() {
    Alert.alert('Button Pressed!');
  }

  return (
    <View style={styles.body}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1C352D'} />
      <View style={styles.header}>
        <Text>TouchableOpacity</Text>
      </View>
      {/* Untuk membuat aksi seperti buttuin saat di klik mengarah ke funvtion yang sudah di buat */}
      {/* TouchableOpacity bisa di isi dengan berbagai macam komponen seperti halnya view */}
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.headerText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C352D',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d1d0d0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1C352D',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default button;
