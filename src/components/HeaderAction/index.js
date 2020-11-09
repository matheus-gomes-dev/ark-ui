import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';

const icons = {
  'list-wallets': faWallet,
  'import-wallet': faDownload,
  'add-wallet': faPlus
};

const defineIconClasses = (isActive, hasDivider) => {
  const classes = `
    box-border
    h-12
    w-12
    md:h-16
    md:w-24
    cursor-pointer
    ${isActive ? 'text-gray-800' : 'text-gray-600'}
    hover:text-gray-800
    flex
    flex-col
    justify-center
    items-center
  `;
  return hasDivider ? `${classes} border-gray-200 border-r` : classes;

}

const HeaderAction = ({ action, label, isActive = false, hasDivider }) => (
  <div className={defineIconClasses(isActive, hasDivider)}>
    <FontAwesomeIcon className={`${isActive ? 'text-red-600' : ''} text-xl`} icon={icons[action]} title={label}/>
    <div className="hidden lg:block ">
      <span className="text-xs">{label}</span>
    </div>
  </div>
);


HeaderAction.propTypes = {
  action: PropTypes.oneOf(['list-wallets', 'import-wallet', 'add-wallet']),
  label: PropTypes.string,
  isActive: PropTypes.bool,
  hasDivider: PropTypes.bool
};

export default HeaderAction;
