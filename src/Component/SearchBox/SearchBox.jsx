import React from 'react';
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <div className="flex items-cent  ">
    <div className="search-box ">
    <button className="btn-search">
      <i className="fa fa-search">
    </i></button>
    <input 
    type="text" 
    className="input-search mr-6" 
    placeholder="Type to Search..."/>

  </div>
    </div>
  );
};

export default SearchBox;
