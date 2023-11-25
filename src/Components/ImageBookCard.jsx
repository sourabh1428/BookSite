import React from 'react';
import './bookcard.css'

const ImageBookCard = ({details,setData,setFlag,imgdetails}) => {
    
    function handleClick(){
        setFlag(false);
        setData(details);
    }

    return (
        <div className='downImage' onClick={handleClick}>
            <img  src={imgdetails}/>
        </div>  
    );
}

export default ImageBookCard;
