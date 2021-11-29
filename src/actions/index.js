// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const loginAction = (email) => ({ type: USER_LOGIN, payload: { email } });
export const expensesAdd = (payload) => ({ type: ADD_EXPENSE, payload });

export function getDataFromApi(data) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((rates) => dispatch(expensesAdd({ ...data, exchangeRates: rates })))
      .catch((e) => console.log(e));
  };
}
