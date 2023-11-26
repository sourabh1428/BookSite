import React from 'react';
import './bookcard.css';

const BookCards = ({details,setData,setFlag,moredetails,key}) => {
  
    const truncateDescription = (description, maxLength) => {
        const words = description.split(' ');
        if (words.length > maxLength) {
          return words.slice(0, maxLength).join(' ') + '...';
        }
        return description+'....';
      };

      function handleClick(){
        setFlag(false);
        setData(details);    
    
    }


    return (
        <div  className= {`card1 ${key % 2 === 0 ? 'even' : 'odd'}`}>
            <div className='card1l'><img src={details.imageLinks.thumbnail} alt="" /></div>
            <div className="card1r">
                <h1>{details.title && truncateDescription(details.title, 3)}</h1>
                <p>{details.description && truncateDescription(details.description, 50)}</p>
                <button onClick={handleClick}>Now Read!</button>
            </div>
        </div>
    );
}

export default BookCards;
