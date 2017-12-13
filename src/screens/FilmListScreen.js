import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class FilmListScreen extends React.Component {
  static navigationOptions = {
      title: 'Films on Freeview'    //displays a title in header bar
  };

  constructor(props) {
    super(props);

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

//this allows to navigate to a new screen. Remember to bind this.props to the onPress handler:

  navigateToDetailScreen() {
    this.props.navigation.navigate('Detail', {
      name: 'Men in Black',
      description: 'Film about aliens and secret agents'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableHighlight style={styles.button} onPress={this.navigateToDetailScreen}>
            <Text>Go to Detail Screen </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#aaa'
  }
});
