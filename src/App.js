import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './tailwind.output.css';
import './App.css';

import actions from 'state/my-wallets/actions';
import Header from 'components/Header';
import MyWallets from 'components/MyWallets';
import Transactions from 'components/Transactions';
import Delegates from 'components/Delegates';
import ImportWallet from 'components/ImportWallet';
import CreateWallet from 'components/CreateWallet';


function App({ loadWallets }) {

  useEffect(() => {
    loadWallets();
  }, [])

  return (
    <Router>
      <div className="container mx-auto">
        <div style={{ maxWidth: '90%', margin: 'auto' }}>
          <Header />
          <Switch>
            <Route exact path="/" component={MyWallets} />
            <Route exact path="/transactions/:address" component={Transactions} />
            <Route exact path="/delegates" component={Delegates} />
            <Route exact path="/import-wallet" component={ImportWallet} />
            <Route exact path="/create-wallet" component={CreateWallet} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(App);
