import React from 'react';
import PropTypes from 'prop-types';

// build out the search and form submit function to export

export default function Search({ search, onSubmit, onChange }) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search">Search</label>
                <input 
                id="search" 
                type="text" 
                name="search" 
                value={search}
                onChange={onChange}
                ></input>
            <button aria-label="see-article">Let's see it!</button>
        </form>
    )
}
Search.PropTypes = {
    search: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
}