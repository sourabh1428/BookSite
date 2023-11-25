import React, { useEffect, useState } from 'react'

import './cardHolder.css';
import BookCards from './BookCards';
import ImageBookCard from './ImageBookCard';
import NewBookData from './NewBookData';

 const Books = () => {
  const[books,setBooks]=useState([]);
  const[data,setData]=useState({});
  const[flag,setFlag]=useState(true);
  
  useEffect(()=>{
  
    async function getBooks(){
        try{
        const r1=await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const r2=await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const res1=await r1.json();
        const res2=await r2.json();
       
        // Assuming res1.items and res2.items contain arrays of book data
        const combinedBooks = [...res1.items, ...res2.items];

        // Update the state with the combined book data
        setBooks(combinedBooks);

        console.log(combinedBooks); // You can log the combined books if needed
            
    }catch(error){
            console.log(error);
        }
    }
    getBooks();

  },[]);
  let z=0;
    return (
      <div className="Books">
        {(flag)? (
          <div className="upperCards">
            {books.map((e, i) => {
              if (z < 3 && e.volumeInfo.description) {
                z++;
                
                return (
                  <BookCards
                    key={i}
                    moredetails={e}
                    details={e.volumeInfo}
                    setFlag={setFlag}
                    setData={setData}
                  />
                );
              }
            })}
          </div>
        ) : (
          <div className="upperCard2"><NewBookData details={data}/></div>
        )}

        <h2 className="more">More Books</h2>
        <div className="lowerCards">
          {books.map((e, i) => {
           
              return (
                <ImageBookCard
                  details={e.volumeInfo.imageLinks.smallThumbnail}
                />
              );
            
          })}
        </div>
      </div>
    );
}

export default Books;