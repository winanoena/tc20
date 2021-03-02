import React from 'react';
import Card from './Card.js';





const CardList = ({mahasiswa}) => {
    
    return (
        <div className='flex  justify-center flex-wrap'>
        
            {
                mahasiswa.map((element, i) => {
                    return (
                            <Card 
                                key={i} 
                                id={i} 
                                name={element.Nama} 
                                NRP ={element.NRP}
                                email={element.Email}
                                phone={element.NomerTelepon}
                                line = {element.Kontak}
                                pic = {element.Foto}
                                time = {element.Timestamp}
                            />
                            
                    );
                })
            }
        </div>
   );
}

export default CardList;