import {TYPES} from '..';

const TYPE = TYPES.ROCKETS;
export const addFavorite = rocket => dispatch => {
  dispatch({
    type: TYPE.ADD_FAVORITE_ROCKET,
    payload: rocket,
  });
  console.log('Add Rocket', rocket);
};

export const removeFavorite = rocket => dispatch => {
  dispatch({
    type: TYPE.REMOVE_FAVORITE_ROCKET,
    payload: rocket,
  });
  console.log('Remove Rocket', rocket);
};
