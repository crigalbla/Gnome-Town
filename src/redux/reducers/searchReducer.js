import * as actionType from '../actionTypes';

const Search = (state = {}, action) => {
  switch (action.type) {
    case actionType.SEARCH_CHANGED:
      return {
        ...state,
        ...action.value.data,
      };
    default:
      return state;
  }
};

export default Search;
