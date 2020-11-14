import React, { useEffect } from 'react';
import { capitalize, pick } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from 'state/delegates/actions';
import { delegateProperties } from 'definitions';
import Table from 'components/Table';

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
    const row = Object.keys(delegate).map(key => delegate[key]);
    return [...result, row];
  }, []);

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>Delegates</span>
      </div>
      <div className="text-sm lg:overflow-x-hidden table-wrapper">
        <Table tHead={tHead} tBody={tBody} />
      </div>
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
