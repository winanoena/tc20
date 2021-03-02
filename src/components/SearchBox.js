import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba'
                type='search' 
                placeholder='search robots'
                style={{
                    border : '10px solid black',
                    borderRadius : '9px'
                }}
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;