import React from 'react';
import { capitalize, isEmpty, pick } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { walletProperties } from 'definitions';
import actions from 'state/my-wallets/actions';
import Table from 'components/Table';

const MyWallets = ({ myWallets, isLoading, history }) => {

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

      {isLoading && <div className="flex justify-center items-center h-64 text-5xl text-red-600">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>}

      {!isLoading && !isEmpty(myWallets) && <div className="text-sm lg:overflow-x-hidden table-wrapper">
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
          onTransactionClick={(wallet) => history.push(`/transactions/${wallet[0]}`)}
        />
      </div>}

      {!isLoading && isEmpty(myWallets) && <div className="flex flex-col justify-center items-center h-64 text-6xl text-gray-400">
        <div>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className="text-base text-gray-800 m-4 text-center">
          <span>You have no wallets, click </span>
          <Link to={{ pathname: '/create-wallet'}}>
            <span className="text-blue-500 cursor-pointer">here</span>
          </Link>
          <span> to create one</span>
        </div>
      </div>}
    </div>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = state => ({
  myWallets: state.myWalletsReducer.myWallets,
  isLoading: state.myWalletsReducer.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWallets);
