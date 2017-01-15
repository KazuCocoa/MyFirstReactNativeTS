import * as React from "react";
import { Component } from "react";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";

class MyFirstReactNativeTS extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.TextStyle,

  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.TextStyle,
});

AppRegistry.registerComponent('MyFirstReactNativeTS', () => MyFirstReactNativeTS);
