import React, { useEffect } from 'react';
import { capitalize, get, last, pick } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { transactionProperties } from 'definitions';
import actions from 'state/transactions/actions';

import Table from 'components/Table';
import Pagination from 'components/Pagination';

const Transactions = ({
  transactions = [],
  isLoading,
  page,
  totalCount,
  previous,
  next,
  hasError,
  loadTransactions,
  history
}) => {

  useEffect(() => {
    console.log(history);
    const address = last(get(history, 'location.pathname', '').split('/'));
    console.log(address);
    loadTransactions(null, address);
  }, []);

  const tHead = transactionProperties.map(property => property === 'timestamp.human' ? 'Date' : capitalize(property));
  const tBody = transactions.reduce((result, transaction) => {
    transaction = pick(transaction, transactionProperties);
    const row = Object.keys(transaction).map(key => transaction[key].toString());
    return [...result, row];
  }, []);
  const hasPagination = previous || next;

  console.log(tBody);

  if (hasError) {
    return (
      <div className="container xl bg-white mt-8 rounded-lg responsive-display">
        <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
          <span>Transactions</span>
        </div>
        <div className="flex flex-col justify-center items-center h-64 text-6xl text-gray-400">
          <div>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div className="text-base text-gray-800 m-4 text-center">
            <span>Failed to load transactions, click </span>
            <span className="text-blue-500 cursor-pointer" onClick={() => loadTransactions()}>here</span>
            <span> to try again</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>Transactions</span>
      </div>
      {isLoading && <div className="flex justify-center items-center h-64 text-5xl text-red-600">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>}
      {!isLoading && <div className="text-sm paginated-table-wrapper">
        <Table tHead={tHead} tBody={tBody} />
      </div>}
      {!isLoading && hasPagination &&
        <Pagination
          page={page}
          total={totalCount}
          hasPrevious={previous}
          hasNext={next}
          onNext={() => loadTransactions(next, '', page + 1)}
          onPrevious={() => loadTransactions(previous, '', page - 1)}
        />
      }
    </div>
  )
};

const mapStateToProps = state => ({
  transactions: state.transactionsReducer.transactions,
  isLoading: state.transactionsReducer.isLoading,
  page: state.transactionsReducer.page,
  totalCount: state.transactionsReducer.totalCount,
  previous: state.transactionsReducer.previous,
  next: state.transactionsReducer.next,
  hasError: state.transactionsReducer.hasError,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
