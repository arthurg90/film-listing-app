import React from 'react';
import { Text } from 'react-native';

const FilmListItem = ({item}) => {
  return (
    <Text>{item.name} {item.year}</Text>
  )
};

export default FilmListItem;
