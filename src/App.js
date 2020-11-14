import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './tailwind.output.css';
import './App.css';

import Header from 'components/Header';
import MyWallets from 'components/MyWallets';
import Transactions from 'components/Transactions';
import Delegates from 'components/Delegates';
import ImportWallet from 'components/ImportWallet';


function App() {
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
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
