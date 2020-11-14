import React from 'react';
import { capitalize } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { walletProperties } from 'definitions';
import Table from 'components/Table';

const MyWallets = ({ myWallets }) => {

  const tHead = walletProperties.map(property => capitalize(property));
  const tBody = myWallets.reduce((result, wallet) => {
    const row = Object.keys(wallet).map(key => wallet[key]);
    return [...result, row]
  }, []);

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>My Wallets</span>
      </div>
      <div className="text-sm lg:overflow-x-hidden table-wrapper">
        <Table tHead={tHead} tBody={tBody} />
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  myWallets: state.myWalletsReducer.myWallets
});

export default connect(mapStateToProps, null)(MyWallets);
