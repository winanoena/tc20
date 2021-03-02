import React from 'react';

const Scroll = (element) => {
    return (
        <div style={{
            overflowY: 'scroll', 
            border : '1px solid black',
            height : '380px'
        }}>
            {element.children}
        </div>
    );
};

export default Scroll;