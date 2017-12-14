import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'


const FilmListItem = ({item, onFilmSelected}) => {
  const nextShowTime = item.showtimes[0];
  const filmRating = item.tmdbRating;
  const isIOS = (Platform.OS === 'ios');

  return (
    <TouchableHighlight underlayColor="#c0c0c0" onPress={onFilmSelected}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.showtime} numberOfLines={1}>{nextShowTime.startsAtDate} at {nextShowTime.startsAtTime} on {nextShowTime.channel}</Text>
        </View>
        { filmRating > 0 ? (
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}> {filmRating}% </Text>
        </View>
      ) : null }
        { isIOS ? (
        <Icon style={styles.accessory}
          name='ios-arrow-forward'/>
      ) :
      <Icon style={styles.accessory}
        name='ios-film-outline'/>
     }
      </View>
    </TouchableHighlight>
  );
};

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    padding: 23,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  showtime: {
    fontSize: 14,
    paddingTop: 3,
    color: '#666'
  },
  ratingContainer: {
    marginLeft: 6
  },
  rating: {
    fontSize: 18
  },
  accessory: {
    marginLeft: 12,
    fontSize: 16,
    color: '#c0c0c0'
  }
});
