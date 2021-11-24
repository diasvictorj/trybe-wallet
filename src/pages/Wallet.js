import React from 'react';
import Expenses from '../components/Expenses';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
