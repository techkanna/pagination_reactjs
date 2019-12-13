import React from 'react';

export const Post = ({ title, id, loading }) => {
  if (loading) return <h2>loading....</h2>;
  return (
    <li>
      <h4>
        Id : {id} , Title: {title}
      </h4>
    </li>
  );
};
