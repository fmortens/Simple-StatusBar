import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button
} from 'react-native';

import tinyColor from 'tinycolor2';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarStyle: 'dark-content',
      backgroundColor: '#fff'
    };

    this.randomizeBackgroundColor = this.randomizeBackgroundColor.bind(this);
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <StatusBar
          barStyle={this.state.statusBarStyle}
        />
        <Text>Press button to randomize background color</Text>
        <Button title="Click me" onPress={this.randomizeBackgroundColor} />
      </View>
    );
  }

  randomizeBackgroundColor() {
    const r = Math.floor(Math.random() * Math.floor(256));
    const g = Math.floor(Math.random() * Math.floor(256));
    const b = Math.floor(Math.random() * Math.floor(256));

    const newColor = tinyColor({r, g, b});

    this.setState({
      backgroundColor : `#${newColor.toHex()}`,
      statusBarStyle: newColor.isDark() ? 'dark-content' : 'light-content'
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
