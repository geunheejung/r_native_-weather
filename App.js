import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  render() {
    const { isLoaded } = this.state;
    return (
      // View 컴포넌트를 이옹하면 ios/android 환경에 따라 objective-c or java 로 변
      <View style={styles.container}>
        {isLoaded
          ? null
          : <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the weather</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 25,
    // padding: 40 30 50 60 불가능
    backgroundColor: '#FDF6AA'
  },
  loadingText: {
    marginBottom: 100,
    fontSize: 38,
  }
});


