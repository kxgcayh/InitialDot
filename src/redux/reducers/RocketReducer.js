import {TYPES} from '..';

const initialState = {
  rocket: [],
  rockets: [],
  favorites: [],
  error: null,
};

const TYPE = TYPES.ROCKETS;

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.GET_ROCKETS:
      return {...state, rockets: action.payload};
    case TYPE.FIND_FAVORITE_ROCKET:
      return {...state, rocket: action.payload};
    case TYPE.ADD_FAVORITE_ROCKET:
      return {...state, favorites: [...state.favorites, action.payload]};
    case TYPE.SET_ERRORS:
      return {error: action.payload};
    case TYPE.REMOVE_FAVORITE_ROCKET:
      return {
        ...state,
        favorites: state.favorites.filter(
          rocket => rocket.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
