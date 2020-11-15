import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ tHead, tBody, Actions, onTransactionClick }) => {

  let header = tHead.map((value, index) => (
    <th key={`table_th_${index}`} className="px-4 py-2 ml-0">
      {value}
    </th>
  ));
  if (Actions) {
    header.push(<th key="table_th_actions" className="px-4 py-2 ml-0">Actions</th>);
  }

  const body = tBody.map((item, index) => (
    <tr key={`tr_${index}`} className="hover:bg-gray-100 cursor-pointer border-b">
      {
        item.reduce((acc, value, colIndex, itemsArray) => {
          acc = ([
            ...acc,
            <td key={`td_${colIndex}`} className={"px-4 py-2 text-center"}>
              {value}
            </td>
          ]);
          if ((colIndex === itemsArray.length - 1) && Actions) {
            acc = [...acc, <Actions onTransactionClick={() => onTransactionClick(item)}/>];
          }
          return acc;
        }, [])
      }
    </tr>
  ));

  return (
    <table className="table-auto w-full relative">
      <thead className="bg-gray-200">
        <tr>
          {header}
        </tr>
      </thead>
      <tbody>
        {body}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tHead: PropTypes.arrayOf(PropTypes.string),
  tBody: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  )
}

export default Table;