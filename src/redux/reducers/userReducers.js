import { SET_INFO } from "../actions/ActionTypes";

const defaultState = {
  info: {},
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_INFO:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
