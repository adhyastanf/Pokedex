import fetch from '../../services/home';
import { DISPATCH, LOADING } from './actionTypes';

export const getPokemon = () => async (dispatch) => {
  try {
    dispatch(loadingAction(true));
    const { data } = await fetch.getPokemon();
    dispatch(dispatchAction(data.results));
    dispatch(loadingAction(false));
  } catch (err) {
    console.log(err);
  }
};

export const dispatchAction = (data) => {
  return { type: DISPATCH, data };
};

export const loadingAction = (isLoading) => {
  return { type: LOADING, isLoading };
};
