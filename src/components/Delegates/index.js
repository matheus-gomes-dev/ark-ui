import React, { useEffect } from 'react';
import { capitalize, pick } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { delegateProperties } from 'definitions';
import actions from 'state/delegates/actions';

import Table from 'components/Table';
import Pagination from 'components/Pagination';

const Delegates = ({
  delegates = [],
  isLoading,
  page,
  totalCount,
  previous,
  next,
  hasError,
  loadDelegates
}) => {

  useEffect(() => {
    loadDelegates();
  }, []);

  const tHead = delegateProperties.map(property => capitalize(property));
  const tBody = delegates.reduce((result, delegate) => {
    delegate = pick(delegate, delegateProperties);
    const row = Object.keys(delegate).map(key => delegate[key].toString());
    return [...result, row];
  }, []);
  const hasPagination = previous || next;

  if (hasError) {
    return (
      <div className="container xl bg-white mt-8 rounded-lg responsive-display">
        <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
          <span>Delegates</span>
        </div>
        <div className="flex flex-col justify-center items-center h-64 text-6xl text-gray-400">
          <div>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div className="text-base text-gray-800 m-4 text-center">
            <span>Failed to load delegates, click </span>
            <span className="text-blue-500 cursor-pointer" onClick={() => loadDelegates()}>here</span>
            <span> to try again</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>Delegates</span>
      </div>
      {isLoading && <div className="flex justify-center items-center h-64 text-5xl text-red-600">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>}
      {!isLoading && <div className="text-sm lg:overflow-x-hidden delegates-table-wrapper">
        <Table tHead={tHead} tBody={tBody} />
      </div>}
      {!isLoading && hasPagination &&
        <Pagination
          page={page}
          total={totalCount}
          hasPrevious={previous}
          hasNext={next}
          onNext={() => loadDelegates(next, page + 1)}
          onPrevious={() => loadDelegates(previous, page - 1)}
        />
      }
    </div>
  )
};

const mapStateToProps = state => ({
  delegates: state.delegatesReducer.delegates,
  isLoading: state.delegatesReducer.isLoading,
  page: state.delegatesReducer.page,
  totalCount: state.delegatesReducer.totalCount,
  previous: state.delegatesReducer.previous,
  next: state.delegatesReducer.next,
  hasError: state.delegatesReducer.hasError,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Delegates);
