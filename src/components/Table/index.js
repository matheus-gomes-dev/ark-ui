import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ tHead, tBody }) => (
  <table className="table-auto w-full relative">
    <thead className="bg-gray-200">
      <tr>
        {
          tHead.map((value, index) => (
            <th
              key={`table_th_${index}`}
              className="px-4 py-2 ml-0 sticky"
            >
              {value}
            </th>
          ))
        }
      </tr>
    </thead>
    <tbody>
      {tBody.map((item, index) => (
        <tr className="hover:bg-gray-100 cursor-pointer border-b" key={`tr_${index}`}>
          {
            item.map((value, colIndex) => (
              <td
                key={`td_${colIndex}`}
                className={"px-4 py-2"}
              >
                {value}
              </td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  tHead: PropTypes.arrayOf(PropTypes.string),
  tBody: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  )
}

export default Table;