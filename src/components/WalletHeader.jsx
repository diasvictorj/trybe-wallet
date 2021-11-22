import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { value, currency } = this.state;
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { email }
        </span>
        <br />
        <span data-testid="total-field">
          { value }
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
});
WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(WalletHeader);
