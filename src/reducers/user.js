// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case USER_LOGIN:
    return { ...state, email: payload.email };
  default:
    return state;
  }
}
export default user;
