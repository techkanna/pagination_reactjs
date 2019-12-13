import React from 'react';

export const PaginationBar = ({ totalPage, postPerPage, currentNumber }) => {
  let paginationButtons = [];
  let i;
  let numberOfPosts = Math.ceil(totalPage / postPerPage);
  for (i = 1; i <= numberOfPosts; i++) {
    paginationButtons.push(i);
  }
  return (
    <div
      style={{
        display: 'flex',
        border: '2px solid #333',
        justifyContent: 'space-around',
        width: '50%'
      }}
    >
      {paginationButtons.map(num => (
        <a
          key={num}
          style={{
            backgroundColor: '#999',
            border: '1px solid #aaa',
            margin: '0.5rem',
            display: 'inline-block'
          }}
          href={'!#'}
          onClick={() => currentNumber(num)}
        >
          {num}
        </a>
      ))}
    </div>
  );
};
