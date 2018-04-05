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
      backgroundColor: '#fff',
      textColor: 'black'
    };

    this.randomizeBackgroundColor = this.randomizeBackgroundColor.bind(this);
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <StatusBar
          barStyle={this.state.statusBarStyle}
        />
        <Text style={{color: this.state.textColor}}>Press button to randomize background color</Text>
        <Button color={this.state.textColor} title="Click me" onPress={this.randomizeBackgroundColor} />
      </View>
    );
  }

  randomizeBackgroundColor() {
    const r = Math.floor(Math.random() * Math.floor(256));
    const g = Math.floor(Math.random() * Math.floor(256));
    const b = Math.floor(Math.random() * Math.floor(256));

    const newColor = tinyColor({r, g, b});
    const isDark = newColor.isDark();

    this.setState({
      backgroundColor : `#${newColor.toHex()}`,
      textColor : isDark ? 'white' : 'black',
      statusBarStyle: isDark ? 'light-content' : 'dark-content'
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
