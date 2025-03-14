// src/screens/LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

export default function LoadingScreen({ navigation }) {
  const [progress, setProgress] = useState(0);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          navigation.replace('Home'); // Navigate to home when done
          return 100;
        }
        return oldProgress + 5;
      });
    }, 500);

    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true })
      ])
    ).start();

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/Iconwhite.png')}
        style={[styles.image, { opacity: fadeAnim }]}
      />
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.text}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 20,
  },
  progress: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    marginTop: 10,
  },
});
