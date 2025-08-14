import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      {/* Untuk Mengubah status bar yang ada di atas header */}
      <StatusBar barStyle={'light-content'} backgroundColor={'grey'} />
      <View style={styles.header}>
        <Text style={styles.title}>My Project01</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      {/* Button untuk menampilkan alert ketika di klik */}
      <Button color="blue" title="Hit Me" onPress={() => {}} />

      <View style={styles.box}>
        <Text>Ini semacam Container</Text>
      </View>
      {/* untuk mengambil gambar lewat file srd image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./src/images/gambar.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};
// style sheet untuk styling komponen
// StyleSheet.create() digunakan untuk membuat objek style yang dapat digunakan pada komponen React Native
// StyleSheet.create() adalah metode yang digunakan untuk membuat objek style yang dapat digunakan pada komponen
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d1d0d0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
    marginBottom: 20,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 14,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default App;
