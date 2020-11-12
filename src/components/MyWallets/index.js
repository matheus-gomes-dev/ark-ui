import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MyWallets = ({ myWallets }) => (
  <div className="container xl bg-white mt-8 rounded-lg responsive-display">
    {JSON.stringify(myWallets)}
  </div>
);

const mapStateToProps = state => ({
  myWallets: state.myWalletsReducer.myWallets
});

export default connect(mapStateToProps, null)(MyWallets);
