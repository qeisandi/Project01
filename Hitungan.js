import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

// let atau variabel untuk meniympan data ,bila integer maka tidak perlu menggunakan tanda petik
// let dana = 1000000;

const Hitungan = () => {
  const [danaSaya, setDana] = useState(1000000);

  function handlePress() {
    let perhitungan = danaSaya - 100000;
    setDana(perhitungan);
    Alert.alert('Dana saat ini: ' + perhitungan);
  }

  return (
    <View style={styles.body}>
      <Text>{danaSaya}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Hasil dana</Text>
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
  button: {
    backgroundColor: '#1C352D',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Hitungan;
