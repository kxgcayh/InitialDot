import axios from 'axios';
import {BASE_URL} from '../../constants';
import {TYPES} from '..';

const TYPE = TYPES.ROCKETS;

export const getRockets = () => {
  return async dispatch => {
    const config = {
      method: 'get',
      url: `${BASE_URL}${TYPE.URL}`,
    };
    try {
      const res = await axios(config);
      dispatch({
        type: TYPE.GET_ROCKETS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TYPE.SET_ERRORS,
        payload: error,
      });
    }
  };
};

export const findRocket = rocket_id => {
  return async dispatch => {
    const config = {
      method: 'get',
      url: `${BASE_URL}${TYPE.URL}/${rocket_id}`,
    };
    try {
      const res = await axios(config);
      dispatch({
        type: TYPE.FIND_FAVORITE_ROCKET,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TYPE.SET_ERRORS,
        payload: error,
      });
    }
  };
};
