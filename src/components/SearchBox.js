import React from "react";

const SearchBox = ({ searchField, searchChangeCallBack }) => {
    return (
        <div className="tc">
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChangeCallBack} />
        </div>
    );
}

export default SearchBox;