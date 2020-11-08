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
    h-24
    w-32
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
    <FontAwesomeIcon icon={icons[action]} />
    <span>{label}</span>
    <div className={`box-border h-1 w-16 mt-2 ${isActive ? 'bg-red-600' : 'bg-white'}`} />
  </div>
);


HeaderAction.propTypes = {
  action: PropTypes.oneOf(['list-wallets', 'import-wallet', 'add-wallet']),
  label: PropTypes.string,
  isActive: PropTypes.bool,
  hasDivider: PropTypes.bool
};

export default HeaderAction;
