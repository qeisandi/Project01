import React, { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { Text } from 'react-native';

const AboutSwitch = () => {
  const [lampu, setLampu] = useState(false);
  return (
    <View style={styles.body}>
      <Text>This is a simple example of using Switch in React Native.</Text>
      <Switch value={lampu} onValueChange={() => setLampu(!lampu)} />
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
});

export default AboutSwitch;
