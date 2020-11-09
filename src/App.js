import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './tailwind.output.css';
import './App.css';
import Header from 'components/Header';
import MyWallets from 'components/MyWallets';


function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <div style={{ maxWidth: '90%', margin: 'auto' }}>
          <Header />
          <Switch>
            <Route exact path="/" component={MyWallets} />
            <Route exact path="/import-wallet" component={MyWallets} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
