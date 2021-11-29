import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataFromApi } from '../actions';

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currencies: [],
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.formGenerate = this.formGenerate.bind(this);
    this.formGenerate2 = this.formGenerate2.bind(this);
    this.formGenerate3 = this.formGenerate3.bind(this);
    this.apiCallCurrencys = this.apiCallCurrencys.bind(this);
  }

  componentDidMount() {
    this.apiCallCurrencys();
  }

  apiCallCurrencys() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((quotes) => {
        const currencies = Object.keys(quotes);
        currencies.splice(1, 1);
        this.setState({ currencies });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  formGenerate3() {
    const { currencies } = this.state;
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            onChange={this.handleChange}
          >
            {
              currencies.length === 0 ? null : (
                currencies.map((curren) => (
                  <option key={curren} data-testid={curren}>{curren}</option>))
              )
            }
          </select>
        </label>
      </div>
    );
  }

  formGenerate2() {
    const { method } = this.state;
    return (
      <div>
        {this.formGenerate3()}
        <label htmlFor="method">
          Método de pagamento
          <select
            data-testid="method-input"
            name="method"
            onChange={this.handleChange}
            value={method}
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            id="tag"
            name="tag"
            data-testid="tag-input"
            onChange={this.handleChange}
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  formGenerate() {
    return (
      <form id="form">
        <label htmlFor="text-input">
          <input
            type="text"
            id="text-input"
            name="value"
            onChange={this.handleChange}
            placeholder="valor da despesa"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description">
          <input
            id="description-input"
            type="text"
            name="description"
            placeholder="descrição"
            data-testid="description-input"
            onChange={this.handleChange}
          />
        </label>
        {this.formGenerate2()}
      </form>
    );
  }

  async handleClick() {
    const { value,
      description,
      currency,
      method,
      tag,
      id,
    } = this.state;

    const expenseObj = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };

    const { savingExpenses } = this.props;
    await savingExpenses(expenseObj);
    const form = document.getElementById('form');
    form.reset();
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currencies: [],
      currency: 'USD',
      method: '',
      tag: '',
    }));
  }

  render() {
    return (
      <div>
        {this.formGenerate()}
        <button
          type="button"
          value="Adicionar despesa"
          onClick={this.handleClick}
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  savingExpenses: (expenseObj) => dispatch(getDataFromApi(expenseObj)),
});

Expenses.propTypes = {
  savingExpenses: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Expenses);
