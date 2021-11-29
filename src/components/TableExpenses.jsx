import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableExpenses extends Component {
  render() {
    /* const {
      expenses,
    } = this.props; */
    return (
      <div>
        <header>
          <table>
            <td>
              <th id="Descrição" value>Descrição </th>
              <th id="Tag" value="">Tag</th>
              <th id="Método de pagamento" value="">Método de pagamento</th>
              <th id="Valor" value="">Valor</th>
              <th id="Moeda" value="">Moeda</th>
              <th id="Câmbio utilizado" value="">Câmbio utilizado</th>
              <th id="Valor convertido" value="">Valor convertido</th>
              <th id="Moeda de conversão" value="">Moeda de conversão</th>
              <th id="Editar/Excluir" value="">Editar/Excluir</th>
            </td>
          </table>
        </header>
      </div>
    );
  }
}

/* TableExpenses.propTypes = {
  expenses: PropTypes.isRequired,
}; */
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableExpenses);
