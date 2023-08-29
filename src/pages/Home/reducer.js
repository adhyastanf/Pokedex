import { LOADING, DISPATCH, ERROR } from './actionTypes';

const initialState = {
  isLoading: false,
  dataPokemon: [],
};
export default function reducers(state = initialState, action) {
  const { isLoading, data, msg } = action;

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading,
      };
    case DISPATCH:
      return {
        ...state,
        dataPokemon: data,
      };
    case ERROR:
      return {
        ...state,
        msg,
      };
    default:
      return state;
  }
}
