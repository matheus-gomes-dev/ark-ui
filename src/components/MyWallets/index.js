import React from 'react';
import { capitalize, pick } from 'lodash';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import { walletProperties } from 'definitions';
import Table from 'components/Table';

const MyWallets = ({ myWallets, history }) => {

  const tHead = walletProperties.map(property => capitalize(property));
  const tBody = myWallets.reduce((result, wallet) => {
    wallet = pick(wallet, walletProperties);
    const row = Object.keys(wallet).map(key => wallet[key].toString());
    return [...result, row];
  }, []);

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>My Wallets</span>
      </div>
      <div className="text-sm lg:overflow-x-hidden table-wrapper">
        <Table
          tHead={tHead}
          tBody={tBody}
          Actions={({ onTransactionClick }) => (
            <td className="border-b px-4 py-2">
              <div className="flex justify-evenly items-center">
                <div className="w-8 flex justify-center items-center">
                  <FontAwesomeIcon icon={faExchangeAlt} onClick={onTransactionClick} title="See Transactions" />
                </div>
              </div>
            </td> 
          )}
          onTransactionClick={(param) => history.push(`/transactions/${param[0]}`)}
        />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  myWallets: state.myWalletsReducer.myWallets
});

export default connect(mapStateToProps, null)(MyWallets);
