import React from 'react';
import {useSpring, animated} from 'react-spring';


const Entries = ({entries}) => {
    const props = useSpring({ number: entries, from: { number: 0 } })
    const style = {
        paddingTop : 5,
        color: 'white',
        fontSize: 14
      };
    return (
        <div>
        {
            (!entries)? 
                <p style={style}>{`Ooops, didn't found any match`}</p>:
                <p style={style}>displaying <animated.span>{props.number}</animated.span> entry</p>}
        </div>
    );     
}

export default Entries;