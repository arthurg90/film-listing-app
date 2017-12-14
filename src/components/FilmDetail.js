import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

const FilmDetail = ({ film }) => {
  const filmRating = film.tmdbRating;
  const filmSynopsis = film.synopsis;
  const imageSource = {
    uri: 'https://image.tmdb.org/t/p/original/' + film.tmdbImageId + '.jpg'
  };

  return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {film.tmdbImageId ? (
              <Image style={styles.image} source={imageSource}></Image>
            ) : null}
            <Text>{filmSynopsis}</Text>
            <Text style={styles.rating}> {filmRating}% </Text>
          </ScrollView>
      </View>
  );
};



export default FilmDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  image: {
    aspectRatio: 0.75,
    width: '100%'
  },
  scrollContainer: {
    padding: 12
  }
});
