import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Inputs from './Inputs';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            id={book.id}
            key={book.title}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <Inputs />
    </div>
  );
};
export default Books;
