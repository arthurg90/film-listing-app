import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class FilmDetailScreen extends Component {
  static navigationOptions = (
    {navigation}) => {
    const name =
      navigation.state.params.name;
    return {
      title: name
    };
  };

  render() {
    const description = this.props.navigation.state.params.description;
    return (
      <View style={styles.container}>
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
