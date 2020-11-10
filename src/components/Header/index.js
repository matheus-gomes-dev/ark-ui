import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from 'assets/ARK-400x400.png';
import Avatar from 'components/Avatar';
import HeaderAction from 'components/HeaderAction';
import actions from 'state/navigation/actions';

const Header = ({ navigationUpdated, screen }) => (
  <div className="container xl h-20 md:h-24 rounded-lg bg-white mt-8 flex justify-between">
    <div className="object-left flex">
      <div
        className="bg-cover bg-center h-20 w-20 rounded-tl-lg rounded-bl-lg md:h-24 md:w-24"
        style={{ backgroundImage: `url(${Logo})` }}
      />
      <div className="pl-0 md:pl-8">
        <Avatar />
      </div>
    </div>
    <div className="object-right flex justify-center items-center md:pr-4">
      <Link to={{ pathname: '/'}}>
        <HeaderAction
          action="list-wallets"
          hasDivider={true}
          isActive={screen === '/'}
          onClick={() => navigationUpdated('/')}
        />
      </Link>
      <Link to={{ pathname: '/import-wallet' }}>
        <HeaderAction
          action="import-wallet"
          hasDivider={true}
          isActive={screen === 'import-wallet'}
          onClick={() => navigationUpdated('import-wallet')}
        />
      </Link>
      <Link to={{ pathname: '/add-wallet'}}>
        <HeaderAction
          action="add-wallet"
          isActive={screen === 'add-wallet'}
          onClick={() => navigationUpdated('add-wallet')}
        />
      </Link>
    </div>
  </div>
);


const mapStateToProps = state => ({
  screen: state.NavigationReducer.screen
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
