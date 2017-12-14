//this is the reducer
import { getAllFilms } from '../data/api'
const types = {
    FETCH_FILM_SUCCESS: '[Films] Fetch Success'
};

const actionCreators = {
  fetchFilmsSuccess: (data) => {
    return {
      type: types.FETCH_FILM_SUCCESS,
      payload: data
    }
  }
};

const fetchFilms = () => {
  return (dispatch) => {
    //fetchFilms is an async function, use promises
    const promise = getAllFilms();
    promise.then((response) => {
      //We have our films data
      //dispatch our 'FETCH_FILM_SUCCESS' action
    dispatch(actionCreators.fetchFilmsSuccess(response.data));
    });
  };
};

const initialState = {
  collection: []
};

function reducer(state = initialState, action) {
  if(action.type === types.FETCH_FILM_SUCCESS) {
    //Handle film data response

    return {
      ...state,
      collection: action.payload
    };
  }
  return state; //reducer always returns state
}

const getFilmsSelector = (state) => state.films.collection;

export default reducer;

export {
  getFilmsSelector,
  actionCreators,
  fetchFilms
};
