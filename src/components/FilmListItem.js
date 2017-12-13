import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FilmListItem = ({item}) => {
  const nextShowTime = item.showtimes[0];
  const filmRating = item.tmdbRating;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.showtime}>{nextShowTime.startsAtDate} at {nextShowTime.startsAtTime} on {nextShowTime.channel}</Text>
      </View>
      { filmRating > 0 ? (
        <View style={styles.ratingContainer}>
        <Text style={styles.rating}> {filmRating}% </Text>
      </View>
    ) : null }
    </View>
  )
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
  }
});
