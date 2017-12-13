import React from 'react';
import { FlatList, Text } from 'react-native';
import FilmListItem from './FilmListItem'

const renderFilmItem = ({item}) => { //item is the object from film json list
  return (
    <FilmListItem item={item} />
  );
};

const extractFilmItemKey = (item) => {  //need a unique key to pass to FlatList, in films.json id is unique for each film so use that
  return item.id;
}

//need a basic stateless component:
const FilmList = ({films}) => {
  return (
    <FlatList
      data={films}
      renderItem={renderFilmItem}
      keyExtractor={extractFilmItemKey} />
  )
};

export default FilmList;
