import React from 'react';
import './Card.css';


const Card = ({name,phone,email,NRP,id,pic,line}) => {
    const showMe = (event) => {
        return (
            <p>AJSDhfilybpfoierwypo</p>
        );
    };
    return (
        <a href={pic}>
        <div className = 'tc bg-light-gray dib br4 pa0 ma1 dim bw2 shadow-5 card' onMouseOver={showMe}>
                <img alt='Foto' src={`https://robohash.org/${id}`} className='foto'  />
                <div className='text' >
                    <h2 className='f4 lh-copy'>{name}</h2>
                    <div className='tl ph10'>
                        <p className='f7 lh-copy'><strong>{NRP}</strong></p>
                        <p >{email}</p>
                        <p>phone : {phone}</p>
                        <p>id : {line}</p>
                    </div>
                </div>
            
        </div>
        </a>
    );
}

export default Card;