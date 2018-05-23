import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // View 컴포넌트를 이옹하면 ios/android 환경에 따라 objective-c or java 로 변
      <View style={styles.container}>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
        <View style={styles.redView}>Red</View>
        <View style={styles.yellowView}>Yellow</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  redView: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  yellowView: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
  }
});


