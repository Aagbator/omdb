import React from 'react';
import '../search/search.css';

const SearchBox = (props) => (
    <div className="search">
        <input type="search" onChange={props.onHandleSearch} placeholder="Search by release year" />
    </div>
)

export default SearchBox;