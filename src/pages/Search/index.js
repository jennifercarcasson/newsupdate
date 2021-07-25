import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { query } = useParams();

  return <div>Search criteria: {query}</div>;
};

export default Search;
