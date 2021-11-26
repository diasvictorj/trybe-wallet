import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { currency } = this.state;
    const { email, expenses } = this.props;
    const convertToBrl = expenses.map(
      (expense) => expense.value * Object.entries(expense.exchangeRates).find(
        (element) => expense.currency === element[0],
      )[1].ask,
    );
    const valueExpended = convertToBrl.reduce((acc, e) => (e) + acc, 0);
    return (
      <header>
        <span data-testid="email-field">
          { email }
        </span>
        <br />
        <span data-testid="total-field">
          { valueExpended }
        </span>
        <br />
        <span data-testid="header-currency-field">
          { currency }
        </span>
        <br />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps, null)(WalletHeader);
