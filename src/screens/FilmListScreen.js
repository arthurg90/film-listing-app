import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { getFilmsSelector, fetchFilms } from '../store/films'
import FilmList from '../components/FilmList';

const mapStateToProps = (state) => {
  return {
    films: getFilmsSelector(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilms: () => dispatch(fetchFilms())
  };
}

class FilmListScreen extends React.Component {
  static navigationOptions = {
      title: 'Films on Freeview'    //displays a title in header bar
  };

  constructor(props) {
    super(props);

    this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  componentDidMount() {
    //Dispatch our action
    this.props.fetchFilms();
  }

//this allows to navigate to a new screen. Remember to bind this.props to the onPress handler:
  navigateToDetailScreen(film) {
    this.props.navigation.navigate('Detail', film);
  }

  render() {
    return (
      <View style={styles.container}>
        <FilmList films={this.props.films} onFilmSelected={this.navigateToDetailScreen}/>
      </View>
    );
  }
}

const FilmListScreenWithState = connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);  //connects mapStateToProps with FilmListScreen

export default FilmListScreenWithState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
