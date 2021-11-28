import React from 'react';
import Expenses from '../components/Expenses';
import TableExpenses from '../components/TableExpenses';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <Expenses />
        <TableExpenses />
      </div>
    );
  }
}

export default Wallet;
