import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as React.ViewStyle,

  text: {
    fontSize: 20,
    textAlign: 'center',
    margine: 10,
  } as React.TextStyle,
});
