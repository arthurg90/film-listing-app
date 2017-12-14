import React from 'react';
import { View, StyleSheet } from 'react-native'
const FilmListSeparator = () => {
  return (
    <View style={styles.container} />
  );
};

export default FilmListSeparator;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2' 
  }
})
