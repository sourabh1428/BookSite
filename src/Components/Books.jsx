import React, { useContext, useEffect, useState } from 'react';
import './cardHolder.css';
import BookCards from './BookCards';
import ImageBookCard from './ImageBookCard';
import NewBookData from './NewBookData';
import CreateSearch from '../Context/bookData';

const Books = () => {
  const { searchRes } = useContext(CreateSearch);
  const [books, setBooks] = useState([]);
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    // Update the books state when searchRes changes
    setBooks(searchRes);
  }, [searchRes]);

  let z = 0;

  return (
    <div className="Books">
      {(flag) ? (
        <div className="upperCards">
          {Array.isArray(books) && books.map((e, i) => {
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
        <div className="upperCard2"><NewBookData details={data} /></div>
      )}

      <h2 className="more">More Books</h2>
      <div className="lowerCards">
        {Array.isArray(books) && books.map((e, i) => {
          return (
            <ImageBookCard
              key={i}
              details={e.volumeInfo.imageLinks.smallThumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Books;
