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
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.formGenerate = this.formGenerate.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  formGenerate() {
    return (
      <form id="form">
        <input
          type="text"
          name="value"
          onChange={ this.handleChange }
          placeholder="valor da despesa"
          data-testid="value-input"
        />
        <input
          type="text"
          name="description"
          placeholder="descrição"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        <select name="currency" data-testid="currency-input">
          <option>BRL</option>
        </select>
        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </form>
    );
  }

  handleClick() {
    const { savingExpenses } = this.props;
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

    savingExpenses(expenseObj);
    const form = document.getElementById('form');
    form.reset();
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    return (
      <div>
        {this.formGenerate()}
        <input
          type="button"
          value="Adicionar despesa"
          onClick={ this.handleClick }
        />
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
