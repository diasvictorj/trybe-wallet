// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case ADD_EXPENSE:
    return ({
      ...state,
      currencies: [...state.currencies],
      expenses: [...state.expenses, payload],
    });
  default:
    return state;
  }
}
export default wallet;
