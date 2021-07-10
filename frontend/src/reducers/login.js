import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  loginList: [],
};

export const loginActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const loginReducer = (state, action) => {
  switch (action.type) {
    case loginActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case loginActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        loginList: action.payload.login,
      };
    default:
      throw new Error();
  }
}
