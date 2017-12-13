import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import FilmList from '../components/FilmList';
import films from '../data/films.json';

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
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View style={styles.container}>
        <FilmList films={films}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
