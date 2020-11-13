import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEraser, faStar } from '@fortawesome/free-solid-svg-icons';

const MyWallets = ({ myWallets }) => (
  <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>My Wallets</span>
      </div>
      <div className="text-sm lg:overflow-x-hidden table-wrapper">
        <table className="table-auto w-full">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-2 hidden lg:block">Address</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Voting</th>
              <th className="px-4 py-2">Balance</th>
              {/* <th className="px-4 py-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {myWallets.map((wallet, index) => (
              <tr ket={`wallet_${get(wallet, 'address', index)}`}>
                <td className="border px-4 py-2 hidden lg:block">{get(wallet, 'address', '')}</td>
                <td className="border px-4 py-2">{get(wallet, 'name', '')}</td>
                <td className="border px-4 py-2">{get(wallet, 'voting', '')}</td>
                <td className="border px-4 py-2">{get(wallet, 'balance', '')}</td>
                {/* <td className="border px-4 py-2">
                  <div className="flex justify-evenly items-center">
                    <div className="w-8 flex justify-center items-center">
                      <FontAwesomeIcon icon={faCopy} />
                    </div>
                    <div className="w-8 flex justify-center items-center">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="w-8 flex justify-center items-center">
                      <FontAwesomeIcon icon={faEraser} />
                    </div>
                  </div>
                </td> */}
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 hidden lg:block">{get(myWallets, '0.address')}</td>
              <td className="border px-4 py-2">Matheus' Wallet</td>
              <td className="border px-4 py-2">bla bla bla</td>
              <td className="border px-4 py-2">13.32</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
);

const mapStateToProps = state => ({
  myWallets: state.myWalletsReducer.myWallets
});

export default connect(mapStateToProps, null)(MyWallets);
