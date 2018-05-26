import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#00C6FB", "#005BEA"]}
        style={styles.container}
      >
        <View style={styles.upper}>
          <Ionicons
            name="ios-rainy"
            size={144}
            color="white"
          />
          <Text style={styles.temp}>35o</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  temp: {
    marginTop: 10,
    fontSize: 48,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 38,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 24,
  }
});