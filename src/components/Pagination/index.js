import React from 'react';

import Button from 'components/Button';

const Pagination = ({
  hasNext,
  hasPrevious,
  page,
  limit = 20,
  total,
  onNext,
  onPrevious
}) => {

  const offSet = ((page - 1) * limit) + 1;

  return (
    <div className="w-full h-24 bg-white flex justify-center items-center">
      <div className="pl-2 pr-2">
        <Button label="Previous" size="sm" disabled={!hasPrevious} onClick={onPrevious} />
      </div>
      <div className="pl-2 pr-2 text-sm text-gray-600">
        <span>{`${offSet}-${offSet + limit - 1} of ${total}`}</span>
      </div>
      <div className="pl-2 pr-2">
        <Button label="Next" size="sm" disabled={!hasNext} onClick={onNext} />
      </div>
    </div>
  );
};

export default Pagination;
