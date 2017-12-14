import React from 'react';
import { FlatList, Text } from 'react-native';
import FilmListItem from './FilmListItem'
import FilmListSeparator from './FilmListSeparator'

const noop = () => null; //no operation blank function for TouchableHighlight

const extractFilmItemKey = (item) => {  //need a unique key to pass to FlatList, in films.json id is unique for each film so use that
  return item.id;
};

//need a basic stateless component:
const FilmList = ({films, onFilmSelected}) => {

  const renderFilmItem = ({item}) => { //item is the object from film json list
    const onSelected = () => {
      onFilmSelected(item);
    };
    return (
      <FilmListItem item={item} onFilmSelected={onSelected} />
    );
  };

  return (
    <FlatList
      data={films}
      renderItem={renderFilmItem}
      keyExtractor={extractFilmItemKey}
      ItemSeparatorComponent={FilmListSeparator} />
  )
};

export default FilmList;
